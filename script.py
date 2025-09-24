import base64
import json
import hashlib

# Ваші ключі з LiqPay
public_key = "ВАШ_PUBLIC_KEY"
private_key = "ВАШ_PRIVATE_KEY"

# Дані про оплату
data = {
    "public_key": public_key,
    "version": "3",
    "action": "pay",
    "amount": "100",           # Сума
    "currency": "UAH",         # Валюта
    "description": "Оплата товару",
    "order_id": "order_001"    # Унікальний номер замовлення
}

# Кодування у base64
data_json = json.dumps(data)
data_encoded = base64.b64encode(data_json.encode()).decode()

# Формування підпису
signature = base64.b64encode(
    hashlib.sha1((private_key + data_encoded + private_key).encode()).digest()
).decode()

print("DATA:", data_encoded)
print("SIGNATURE:", signature)
