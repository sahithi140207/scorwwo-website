from bs4 import BeautifulSoup, NavigableString, Comment
from pathlib import Path

html_path = Path('index.html')
text = html_path.read_text(encoding='utf-8')

soup = BeautifulSoup(text, 'html.parser')

# Remove scripts, styles
for el in soup(['script', 'style', 'noscript']):
    el.decompose()

results = []

def has_data_i18n(el):
    while el and el.name:
        if el.has_attr('data-i18n'):
            return True
        el = el.parent
    return False

for elem in soup.find_all(text=True):
    if isinstance(elem, Comment):
        continue
    txt = elem.strip()
    if not txt:
        continue
    parent = elem.parent
    # skip attributes-only texts like inside <i> icons that are not actual content
    if parent.name in ['i', 'svg', 'path']:
        continue
    # Skip if ancestor has data-i18n
    if has_data_i18n(parent):
        continue
    # Skip numbers and punctuation-only
    if len([c for c in txt if c.isalpha()]) == 0:
        continue
    results.append((parent.name, txt))

if not results:
    print('No untranslated text found.')
else:
    print('Untranslated text nodes:')
    for tag, txt in results:
        print(f'- <{tag}>: {txt}')
