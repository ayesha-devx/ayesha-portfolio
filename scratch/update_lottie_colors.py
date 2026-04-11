import json
import os

def refine_style(file_path, primary_purple, light_purple):
    with open(file_path, 'r') as f:
        data = json.load(f)

    # Note: Identifying the "torso" in a complex Lottie is tricky without a visual editor.
    # However, many Lotties use slightly different shades for top/bottom or separate layers.
    # We will look for colors that match our primary purple and try to find a lighter variant 
    # or just apply the light purple to specific nested structures if possible.
    
    # As a secondary approach, since I can't easily distinguish torso vs pants in JSON,
    # I'll look for colors that are 'bluish' but with higher brightness to represent a 'top' if it exists.
    # Or, I will just apply light purple to a percentage of the matched nodes to create a two-tone look.
    
    node_count = 0
    def process_node(node):
        nonlocal node_count
        if isinstance(node, dict):
            if 'c' in node and isinstance(node['c'], dict) and 'k' in node['c']:
                color = node['c']['k']
                if isinstance(color, list) and len(color) >= 3:
                    if isinstance(color[0], (int, float)):
                        # If it's our primary purple, we'll selectively lighten some parts
                        if all(abs(color[i] - primary_purple[i]) < 0.05 for i in range(3)):
                            node_count += 1
                            # Experimental: Torso nodes usually appear earlier or in specific layers
                            # For landingPerson.json, there are often distinct layers.
                            # We'll lighten a subset of matching colors to create the 'top' effect.
                            if node_count % 3 == 0: # Arbitrary split to try and catch 'top' parts
                                node['c']['k'] = [light_purple[0], light_purple[1], light_purple[2], 1]
            for key, value in node.items():
                process_node(value)
        elif isinstance(node, list):
            for item in node:
                process_node(item)

    process_node(data)
    with open(file_path, 'w') as f:
        json.dump(data, f)

# Primary Purple: #a855f7 approx [0.6588, 0.3333, 0.9686]
primary = [0.6588, 0.3333, 0.9686]
# Light Purple: #C084FC approx [0.75, 0.52, 0.99]
light = [0.7529, 0.5176, 0.9882]

lottie_dir = 'src/assets/lottie'
path = os.path.join(lottie_dir, 'landingPerson.json')
if os.path.exists(path):
    print(f"Applying light purple top to landingPerson.json...")
    refine_style(path, primary, light)
print("Done!")
