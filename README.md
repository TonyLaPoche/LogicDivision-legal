# 🧠 Logic Division - Site Légal

Site web de documentation légale pour l'application mobile Logic Division développée par Antoine Terrade, développeur indépendant.

## 📋 Contenu

Ce site contient la documentation légale obligatoire pour la publication sur Google Play Store :

- **Page d'accueil** (`index.html`) - Navigation et présentation
- **Politique de Confidentialité** (`privacy-policy.html`) - Conforme RGPD et AdMob
- **Conditions d'Utilisation** (`terms-of-service.html`) - Conditions d'usage de l'app
- **Styles** (`styles.css` + `document-styles.css`) - Design corporate Logica Corporation (thème graphique)
- **Scripts** (`scripts.js`) - Interactions et animations

## 🎨 Design

Le site reprend le design corporate de Logic Division (thème "Logica Corporation" pour l'immersion) :
- **Couleurs** : Palette basée sur `constants/SeveranceTheme.ts`
- **Typographie** : Inter (similaire à SF Pro Display de l'app)
- **Mode sombre/clair** : Détection automatique via `prefers-color-scheme`
- **Responsive** : Optimisé mobile et desktop

## 🚀 Déploiement

### Option 1 : GitHub Pages (Recommandé)

```bash
# 1. Créer un nouveau repository GitHub
# Nom suggéré : logicdivision-legal

# 2. Copier le contenu du dossier legal-website
cp -r legal-website/* /path/to/your/repo/

# 3. Commit et push
git add .
git commit -m "🏢 Site légal Logic Division v1.0"
git push origin main

# 4. Activer GitHub Pages
# Settings → Pages → Source: Deploy from a branch → main

# 5. URL résultante
# https://votreusername.github.io/logicdivision-legal
```

### Option 2 : Netlify

```bash
# 1. Drag & drop du dossier legal-website sur netlify.com
# 2. URL automatique générée (ex: happy-newton-abc123.netlify.app)
# 3. Optionnel : Configuration domaine personnalisé
```

### Option 3 : Vercel

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer depuis le dossier legal-website
cd legal-website
vercel

# 3. Suivre les instructions
```

## 📱 Intégration Play Store

Une fois déployé, utiliser les URLs dans la Google Play Console :

```
Politique de confidentialité : https://yoursite.com/privacy-policy.html
Site web du développeur : https://yoursite.com
Contact du développeur : antoine.terrade@gmail.com
```

## 📧 Configuration des Emails

Les adresses email sont configurées pour utiliser votre Gmail principal :

```
antoine.terrade@gmail.com - Contact principal et support
```

### Alternative avec domaine personnalisé (optionnel)

Si vous obtenez un domaine :

```
support@votre-domaine.com    - Support technique
privacy@votre-domaine.com    - Protection des données  
legal@votre-domaine.com      - Questions légales
```

## 🔧 Personnalisation

### Informations Micro-entrepreneur

Ajouter votre numéro SIRET dans `privacy-policy.html` :

```html
<div class="info-card">
    <p><strong>Antoine Terrade</strong><br>
    Micro-entrepreneur - Développeur indépendant<br>
    SIRET : [VOTRE_NUMERO_SIRET]<br>
    Email : <a href="mailto:antoine.terrade@gmail.com">antoine.terrade@gmail.com</a></p>
</div>
```

### Couleurs Corporate

Les couleurs sont définies dans `:root` de `styles.css` :

```css
:root {
  --color-primary-blue: #4A7BA7;  /* Bleu principal Logic Division */
  --color-slate: #89AEC8;         /* Bleu secondaire */
  --color-corporate-green: #7B8B73; /* Vert corporate */
  /* ... */
}
```

### Informations de Contact

Toutes les références pointent vers :

```html
<a href="mailto:antoine.terrade@gmail.com">antoine.terrade@gmail.com</a>
```

## ✅ Checklist de Déploiement

- [ ] **Domaine configuré** et accessible
- [ ] **Email antoine.terrade@gmail.com** opérationnel
- [ ] **Numéro SIRET** ajouté dans la politique de confidentialité
- [ ] **HTTPS activé** (obligatoire pour Play Store)
- [ ] **URLs testées** sur mobile et desktop
- [ ] **Politique de confidentialité** complète et à jour
- [ ] **Conditions d'utilisation** spécifiques à votre app
- [ ] **Mode sombre/clair** fonctionnel
- [ ] **Responsive design** validé
- [ ] **Performance** optimisée (PageSpeed, Lighthouse)

## 📊 Analytics (Optionnel)

Pour suivre les visites, ajouter Google Analytics :

```html
<!-- Dans le <head> de chaque page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 👨‍💻 Antoine Terrade - Micro-entrepreneur

Site créé pour Logic Division v1.0  
Développé par Antoine Terrade © 2025  

**Statut :** Micro-entrepreneur  
**Objectif Release :** 25 juin 2025  
**Sprint 1 :** Assets critiques (11-14 juin)

---

## 💡 Notes sur le Thème Corporate

- **Logica Corporation** = Élément narratif/thème visuel de l'app
- **Antoine Terrade** = Véritable responsable légal et développeur
- **Design** = Cohérence avec l'univers immersif de Logic Division
- **Légal** = Conformité micro-entrepreneur française

Le site mélange intelligemment l'immersion thématique de Logic Division avec la conformité légale réelle pour un micro-entrepreneur ! 🚀 