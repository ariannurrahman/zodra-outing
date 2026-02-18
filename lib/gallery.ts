// Unsplash images - use only verified IDs from working sources
// Format: https://images.unsplash.com/photo-{id}?w=400&q=80&fit=crop
const unsplash = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`;

// Simple gray blur placeholder for next/image
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFhcYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhEDEQA/ALG0UUVez//Z";

// 12 images - consistent heights (400, 450, 500) for cohesive masonry
export const galleryImages = [
  { src: unsplash("1522163182402-834f871fd851"), alt: "Tim rafting bersama tersenyum", width: 400, height: 450 },
  { src: unsplash("1578662996442-48f60103fc96"), alt: "Paintball seru bersama rekan kerja", width: 400, height: 500 },
  { src: unsplash("1529156069898-49953e39b3ac"), alt: "Aktivitas team building kelompok", width: 400, height: 400 },
  { src: unsplash("1504280390367-361c6d9f38f4"), alt: "Petualangan offroad bersama tim", width: 400, height: 400 },
  { src: unsplash("1551632811-561732d1e306"), alt: "Outbound di alam terbuka", width: 400, height: 450 },
  { src: unsplash("1506905925346-21bda4d32df4"), alt: "Mendaki dan berkemah bersama", width: 400, height: 400 },
  { src: unsplash("1547347298-4074fc3086f0"), alt: "High five setelah menyelesaikan tantangan", width: 400, height: 450 },
  { src: unsplash("1517457373958-b7bdd4587205"), alt: "Keseruan camping malam hari", width: 400, height: 400 },
  { src: unsplash("1517457373958-b7bdd4587205"), alt: "Pemandangan alam outbound", width: 400, height: 500 },
  { src: unsplash("1522163182402-834f871fd851"), alt: "Rafting seru di sungai", width: 400, height: 400 },
  { src: unsplash("1578662996442-48f60103fc96"), alt: "Aksi paintball outbound", width: 400, height: 450 },
  { src: unsplash("1529156069898-49953e39b3ac"), alt: "Team building outbound", width: 400, height: 400 },
];
