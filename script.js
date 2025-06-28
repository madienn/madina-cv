
assets_dir = os.path.join(base_path, "assets")
os.makedirs(assets_dir, exist_ok=True)

with open(os.path.join(base_path, "index.html"), "w") as f:
    f.write(index_html)

with open(os.path.join(base_path, "style.css"), "w") as f:
    f.write(style_css)

with open(os.path.join(base_path, "script.js"), "w") as f:
    f.write(script_js)

# Dummy profile image placeholder
placeholder_img_path = os.path.join(assets_dir, "madina-profile.jpg")
with open(placeholder_img_path, "wb") as f:
    f.write(b"")  # empty placeholder for now

# Zip it
zip_path = "/mnt/data/europass-style-site.zip"
with zipfile.ZipFile(zip_path, 'w') as zipf:
    for foldername, _, filenames in os.walk(base_path):
        for filename in filenames:
            filepath = os.path.join(foldername, filename)
            arcname = os.path.relpath(filepath, base_path)
            zipf.write(filepath, arcname)

zip_path

