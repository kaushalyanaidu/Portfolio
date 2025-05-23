const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const dirs = ['public/projects', 'public/images'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Placeholder image URLs (replace these with actual image URLs)
const images = {
  'sentiment-analysis.jpg': 'https://example.com/sentiment-analysis.jpg',
  'sales-forecast.jpg': 'https://example.com/sales-forecast.jpg',
  'supply-chain.jpg': 'https://example.com/supply-chain.jpg',
  'churn-prediction.jpg': 'https://example.com/churn-prediction.jpg',
  'profile.jpg': 'https://example.com/profile.jpg'
};

// Download images
Object.entries(images).forEach(([filename, url]) => {
  const filepath = path.join(
    'public',
    filename.includes('profile') ? 'images' : 'projects',
    filename
  );
  
  console.log(`Downloading ${filename}...`);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
}); 