from pypdf import PdfReader
print("--- OLIMP AIR ---")
try:
    reader = PdfReader("cpny/OLIMP AIR ENG.pdf")
    for p in reader.pages: print(p.extract_text())
except Exception as e: print(e)
print("--- BANK ---")
try:
    reader = PdfReader("cpny/BANK OLIMP AIR ENG.pdf")
    for p in reader.pages: print(p.extract_text())
except Exception as e: print(e)
