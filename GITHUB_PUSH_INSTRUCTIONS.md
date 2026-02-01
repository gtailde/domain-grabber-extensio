# 🚀 Push до GitHub - Інструкція

## 1️⃣ Створіть репозиторій на GitHub

1. Відкрийте https://github.com
2. Натисніть зелену кнопку **New** (або **New repository**)
3. Заповніть форму:
   - **Repository name**: `domain-grabber-extension`
   - **Description**: `Chrome extension for scraping domains from ExpiredDomains.net`
   - **Visibility**: Public або Private (на ваш вибір)
   - ⚠️ **НЕ вмикайте** "Initialize this repository with a README"
   - ⚠️ **НЕ додавайте** .gitignore або license (вони вже є в проекті)
4. Натисніть **Create repository**

---

## 2️⃣ Підключіть та push код

GitHub покаже вам сторінку з командами. Скопіюйте ваш USERNAME з URL та виконайте:

### Команди для виконання в PowerShell:

```powershell
# Перейдіть в папку проекту (якщо ще не там)
cd c:\Users\Oleg\Desktop\Repalm\repalmExtensions

# Додайте віддалений репозиторій
# ЗАМІНІТЬ 'YOUR_USERNAME' на ваш GitHub username!
git remote add origin https://github.com/YOUR_USERNAME/domain-grabber-extension.git

# Перевірте що remote додано правильно
git remote -v

# Push всі файли на GitHub
git push -u origin master

# Якщо попросить логін - введіть ваш GitHub username
# Якщо попросить пароль - використайте Personal Access Token (не звичайний пароль!)
```

### 💡 Як створити Personal Access Token (якщо потрібно):

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Виберіть scope: **repo** (full control of private repositories)
4. Створіть та скопіюйте токен
5. Використайте цей токен замість пароля

---

## 3️⃣ Готово! 

Ваш код тепер на GitHub! 

### Посилання на репозиторій:
```
https://github.com/YOUR_USERNAME/domain-grabber-extension
```

### Для інших користувачів (інструкція клонування):

```bash
# Клонувати репозиторій
git clone https://github.com/YOUR_USERNAME/domain-grabber-extension.git

# Перейти в папку
cd domain-grabber-extension

# Установити в Chrome:
# 1. Відкрити chrome://extensions/
# 2. Увімкнути Developer mode
# 3. Load unpacked → вибрати папку domain-grabber-extension
```

---

## 🔄 Майбутні оновлення

Коли ви зробите зміни в коді:

```powershell
# 1. Додати змінені файли
git add .

# 2. Зробити commit з описом змін
git commit -m "Опис ваших змін"

# 3. Push на GitHub
git push
```

---

## 📝 Корисні git команди

```powershell
# Подивитися статус (які файли змінено)
git status

# Подивитися історію commits
git log --oneline

# Подивитися remote repositories
git remote -v

# Створити нову гілку
git checkout -b feature-name

# Перемкнутися на master
git checkout master
```

---

## ✅ Checklist

- [ ] Створив репозиторій на GitHub
- [ ] Додав remote origin
- [ ] Виконав git push
- [ ] Перевірив що файли з'явились на GitHub
- [ ] Оновив посилання в README.md (замінив YOUR_USERNAME)
- [ ] Поділився посиланням з друзями! 🎉
