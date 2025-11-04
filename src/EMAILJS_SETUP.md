# 📧 Configuración de EmailJS para el Formulario de Contacto

## 🚀 Pasos para configurar EmailJS (2-3 minutos)

### 1️⃣ Crear Cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click en **"Sign Up"** (es GRATIS - 200 emails/mes)
3. Regístrate con tu email (puedes usar Google)

---

### 2️⃣ Agregar un Servicio de Email
1. Una vez dentro, ve a **"Email Services"** en el menú izquierdo
2. Click en **"Add New Service"**
3. Selecciona **"Gmail"** (o el que prefieras)
4. Click en **"Connect Account"** y autoriza tu Gmail: **ambriz.calderon.erick9@gmail.com**
5. Dale un nombre al servicio (ej: "Portfolio Contact")
6. Click en **"Create Service"**
7. ✅ **COPIA tu Service ID** (lo necesitarás después)

---

### 3️⃣ Crear un Template de Email
1. Ve a **"Email Templates"** en el menú izquierdo
2. Click en **"Create New Template"**
3. Personaliza el template con este contenido:

**Subject:**
```
Nuevo mensaje de {{from_name}} - {{subject}}
```

**Content:**
```
Has recibido un nuevo mensaje desde tu portafolio:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu formulario de contacto del portafolio.
```

4. En la parte superior derecha, verás **"To Email"**
   - Asegúrate que sea: **{{to_email}}**
5. Click en **"Save"**
6. ✅ **COPIA tu Template ID** (está arriba del nombre del template)

---

### 4️⃣ Obtener tu Public Key
1. Ve a **"Account"** (en el menú superior derecho, tu perfil)
2. Ve a la pestaña **"General"**
3. Busca **"Public Key"** (también llamado "User ID")
4. ✅ **COPIA tu Public Key**

---

### 5️⃣ Actualizar el Código
1. Abre el archivo `/components/DillonContact.tsx`
2. Busca estas líneas (alrededor de la línea 26-28):

```typescript
const serviceID = 'YOUR_SERVICE_ID'; // Tu Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Tu Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Tu Public Key
```

3. Reemplaza con tus datos reales:

```typescript
const serviceID = 'service_xxxxxxx'; // El Service ID que copiaste
const templateID = 'template_xxxxxxx'; // El Template ID que copiaste
const publicKey = 'xxxxxxxxxxxxxxxx'; // El Public Key que copiaste
```

---

## ✅ ¡Listo! 🎉

Ahora tu formulario está 100% funcional. Cuando alguien envíe un mensaje:

1. ✉️ Te llegará un email a: **ambriz.calderon.erick9@gmail.com**
2. 🔔 El usuario verá una notificación de confirmación
3. 🧹 El formulario se limpiará automáticamente

---

## 🧪 Probar el Formulario

1. Ve a tu portafolio
2. Scroll hasta la sección "Contact"
3. Llena el formulario con datos de prueba
4. Click en "Send Message"
5. Deberías ver una notificación de éxito
6. Revisa tu email: **ambriz.calderon.erick9@gmail.com**

---

## 🔧 Solución de Problemas

### ❌ Error: "Service ID not found"
- Verifica que copiaste correctamente el Service ID
- Asegúrate que el servicio esté **activo** en EmailJS

### ❌ Error: "Template ID not found"
- Verifica que copiaste correctamente el Template ID
- Asegúrate que el template esté **guardado**

### ❌ No recibo emails
- Revisa tu carpeta de **SPAM**
- Verifica que tu Gmail esté autorizado en EmailJS
- Asegúrate que el campo **{{to_email}}** esté configurado

---

## 💡 Tips Extra

- **Límite gratis:** 200 emails/mes (más que suficiente para un portafolio)
- **Spam protection:** EmailJS incluye protección anti-spam
- **Sin backend:** No necesitas servidor, todo funciona del lado del cliente
- **Notificaciones:** Las notificaciones están en español e inglés según el idioma seleccionado

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas, revisa:
- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [FAQs de EmailJS](https://www.emailjs.com/docs/faq/)

---

**¡Tu formulario de contacto está listo para recibir mensajes! 🚀📧**
