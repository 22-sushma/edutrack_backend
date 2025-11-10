require('dotenv').config();
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');

(async ()=>{
  const email = process.env.SEED_ADMIN_EMAIL || 'admin@edutrack.local';
  const pass = process.env.SEED_ADMIN_PASS || 'Admin@123';
  const hash = await bcrypt.hash(pass, 10);
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'edutrack'
  });
  const [rows] = await conn.execute('SELECT id FROM users WHERE email = ?', [email]);
  if (rows.length === 0) {
    await conn.execute('INSERT INTO users (full_name,email,password_hash,role) VALUES (?,?,?,?)', ['Admin', email, hash, 'admin']);
    console.log('Admin user created:', email);
  } else {
    console.log('Admin exists');
  }
  await conn.end();
})().catch(e=>{ console.error(e); process.exit(1); });
