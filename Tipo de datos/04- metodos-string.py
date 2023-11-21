animal = "   CHAnchito feliz  "
# upper()
print(animal.upper())

# lower()
print(animal.lower())

# capitalize()

# Concatenando metodos
print(animal.strip().capitalize())

# title()
print(animal.title())

# strip()
print(animal.strip())
print(animal.lstrip())
print(animal.rstrip())

# find()
print(animal.find("feliz"))

# replace()
print(animal.replace("feliz", "Cojelon"))

# Encontrar una cadena de caracteres

# se encuentra
print("feliz" in animal)
# no se encuentra
print("feliz" not in animal)
