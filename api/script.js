export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  // Detectar si la petición viene de Roblox o Delta
  const isRoblox = userAgent.includes('Roblox') || userAgent.includes('Delta');

  if (isRoblox) {
    // Pon aquí abajo tu enlace raw real de GitHub entre las comillas
    const githubRawUrl = 'https://raw.githubusercontent.com/thescripterblox/Duels-Script-ESP-SILENT-AIM-KILL-ALL-HITBOX/refs/heads/main/DUELS%20SCRIPT%20ROBLOX';
    
    try {
      const response = await fetch(githubRawUrl);
      const scriptCode = await response.text();
      
      res.setHeader('Content-Type', 'text/plain');
      return res.status(200).send(scriptCode);
    } catch (error) {
      return res.status(500).send("Error al cargar el script.");
    }
  } else {
    // Si un curioso entra desde Google Chrome, lo redirige a tu TikTok
    res.writeHead(302, { Location: 'https://www.tiktok.com/@jesus_acm4' });
    res.end();
  }
}
