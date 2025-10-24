// Simple noise function
float noise(vec2 p) {
  return sin(p.x * 0.1) * cos(p.y * 0.1);
}

// Fractional Brownian Motion (fbm) - layered noise for more organic patterns
float fbm(vec2 p, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < octaves; i++) {
    value += amplitude * noise(p * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }

  return value;
}

// Overloaded version with default octaves
float fbm(vec2 p) {
  return fbm(p, 4);
}
