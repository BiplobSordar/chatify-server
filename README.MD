<h1 align="center">🚀 Chatify Server (Backend)</h1>

<p align="center">
  Backend service for the <b>Chatify</b> real-time chat application built with
  <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, and <b>Socket.IO</b>.
</p>

<hr />

<h2>✨ Features</h2>
<ul>
  <li>🔐 JWT Authentication (Access & Refresh Tokens)</li>
  <li>🍪 Secure HTTP-only cookies</li>
  <li>💬 Real-time communication using Socket.IO</li>
  <li>🟢 Online users tracking</li>
  <li>📧 Welcome email using Resend</li>
  <li>☁️ Image upload with Cloudinary</li>
  <li>🛡️ Security middleware & CORS handling</li>
</ul>

<hr />

<h2>🛠️ Tech Stack</h2>
<table>
  <tr>
    <td><b>Runtime</b></td>
    <td>Node.js</td>
  </tr>
  <tr>
    <td><b>Framework</b></td>
    <td>Express (v5)</td>
  </tr>
  <tr>
    <td><b>Database</b></td>
    <td>MongoDB + Mongoose</td>
  </tr>
  <tr>
    <td><b>Real-time</b></td>
    <td>Socket.IO</td>
  </tr>
  <tr>
    <td><b>Auth</b></td>
    <td>JWT</td>
  </tr>
  <tr>
    <td><b>Email</b></td>
    <td>Resend</td>
  </tr>
  <tr>
    <td><b>Storage</b></td>
    <td>Cloudinary</td>
  </tr>
</table>

<hr />

<h2>📂 Project Structure</h2>

<pre>
chatify-server/
│
├── src/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── sockets/
│   └── emails/
│
├── .env
├── package.json
└── README.md
</pre>

<hr />

<h2>⚙️ Environment Variables</h2>

<pre>
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

</pre>

<hr />

<h2>▶️ Run the Server</h2>

<h4>Development</h4>
<pre>npm run dev</pre>

<h4>Production</h4>
<pre>npm start</pre>

<p>
Server runs at: <br />
<b>http://localhost:5000</b>
</p>

<hr />

<h2>🔌 Socket.IO</h2>
<ul>
  <li>Socket server runs on the backend root</li>
  <li>Used for real-time messaging & online users</li>
</ul>

<pre>
io("http://localhost:5000", {
  withCredentials: true
});
</pre>

<hr />

<h2>🔐 Authentication Flow</h2>
<ol>
  <li>User logs in or signs up</li>
  <li>JWT tokens are generated</li>
  <li>Tokens stored in HTTP-only cookies</li>
  <li>Auth check via <code>/api/auth/check</code></li>
  <li>Socket connection allowed for authenticated users</li>
</ol>

<hr />

<h2>📧 Email Notes (Resend)</h2>
<ul>
  <li>Public domains like <code>gmail.com</code> are not allowed</li>
  <li>Use <code>onboarding@resend.dev</code> for development</li>
  <li>Use a verified custom domain for production</li>
</ul>

<hr />

<h2>👤 Author</h2>
<p>
<b>Biplob Sordar</b><br />
Full Stack Developer
</p>

<hr />

<h2>📄 License</h2>
<p>ISC License</p>

<hr/>

<h2>👨‍💻 Author</h2>

<p>
  <b>Biplob Sordar</b><br/>
  Full Stack Developer (MERN)<br/><br/>
  🔗 GitHub: <a href="https://github.com/BiplobSordar">Biplob Sordar</a><br/>
  🔗 LinkedIn: <a href="www.linkedin.com/in/biplob-sordar">Biplob Sordar</a>
</p>

<hr/>

<p align="center">
  ⭐ If you like this project, please give it a star!
</p>