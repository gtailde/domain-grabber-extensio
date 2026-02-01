from PIL import Image, ImageDraw

sizes = [16, 32, 48, 128]

for size in sizes:
    img = Image.new('RGBA', (size, size), (34, 158, 148, 255))
    draw = ImageDraw.Draw(img)
    
    # Rounded rectangle background
    draw.rounded_rectangle([0, 0, size-1, size-1], radius=size//5, fill=(34, 158, 148, 255))
    
    # Globe
    center = size // 2
    radius = size // 3
    draw.ellipse([center-radius, center-radius, center+radius, center+radius], 
                 outline=(255, 255, 255, 255), width=max(2, size//32))
    
    # Latitude lines
    draw.ellipse([center-radius, center-radius//3, center+radius, center+radius//3], 
                 outline=(255, 255, 255, 180), width=max(1, size//48))
    
    # Longitude line
    draw.ellipse([center-radius//3, center-radius, center+radius//3, center+radius], 
                 outline=(255, 255, 255, 180), width=max(1, size//48))
    
    # Arrow pointer
    arrow_size = size // 10
    arrow_x = center + radius // 2
    arrow_y = center - radius // 2
    draw.polygon([
        (arrow_x, arrow_y),
        (arrow_x + arrow_size, arrow_y + arrow_size),
        (arrow_x + arrow_size//2, arrow_y + arrow_size),
        (arrow_x + arrow_size//2, arrow_y + arrow_size*2),
        (arrow_x - arrow_size//2, arrow_y + arrow_size*2),
        (arrow_x - arrow_size//2, arrow_y + arrow_size),
        (arrow_x - arrow_size, arrow_y + arrow_size)
    ], fill=(255, 255, 255, 255))
    
    # Data bars
    bar_y = size - size//4
    for i, h in enumerate([0.6, 0.75, 1.0]):
        x = size//6 + i * size//12
        bar_height = int(h * size//8)
        draw.rounded_rectangle([x, bar_y + size//8 - bar_height, x+size//24, bar_y+size//8], 
                              radius=2, fill=(255, 255, 255, int(200 + 55*h)))
    
    img.save(f'icon{size}.png')
    print(f'Created icon{size}.png')

print('All icons generated successfully!')
