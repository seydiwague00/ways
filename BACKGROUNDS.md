# Système de Backgrounds Animés - Ways

## 🎨 Vue d'ensemble

Le site Ways utilise un système de backgrounds animés dynamiques qui s'adaptent selon les pages et sections pour créer une expérience visuelle cohérente et engageante.

## 📁 Composants

### `AnimatedBackground.tsx`
Composant principal qui génère les éléments animés en arrière-plan.

### `PageWrapper.tsx`
Wrapper qui applique le background animé à une page ou section entière.

## 🎭 Variantes de Background

### `hero` - Page d'accueil
- **Gradient** : `from-slate-50 via-white to-blue-50`
- **Éléments** : 6 papiers + 4 formes géométriques
- **Intensité** : Strong (éléments très visibles)
- **Usage** : Section hero de la page d'accueil

### `page` - Pages principales
- **Gradient** : `from-white via-slate-50 to-gray-50`
- **Éléments** : 4 papiers + 3 formes géométriques
- **Intensité** : Medium (équilibre visuel)
- **Usage** : Pages secteurs, blog, contact

### `section` - Sections de contenu
- **Gradient** : `from-gray-50 to-white`
- **Éléments** : 2 papiers + 2 formes géométriques
- **Intensité** : Light (subtil, ne distrait pas du contenu)
- **Usage** : Sections de la page d'accueil

### `contact` - Page de contact
- **Gradient** : `from-blue-50 via-white to-slate-50`
- **Éléments** : 3 papiers + 2 formes géométriques
- **Intensité** : Medium
- **Usage** : Page de contact spécifiquement

### `blog` - Page blog
- **Gradient** : `from-gray-50 via-white to-blue-25`
- **Éléments** : 5 papiers + 3 formes géométriques
- **Intensité** : Medium
- **Usage** : Page blog et articles

## 🎯 Niveaux d'intensité

### `light` - Léger
- **Papiers** : `opacity-20`
- **Formes** : `opacity-10`
- **Grille** : `opacity-3`
- **Overlay** : `bg-white/30`

### `medium` - Moyen
- **Papiers** : `opacity-40`
- **Formes** : `opacity-20`
- **Grille** : `opacity-5`
- **Overlay** : Aucun

### `strong` - Fort
- **Papiers** : `opacity-60`
- **Formes** : `opacity-30`
- **Grille** : `opacity-8`
- **Overlay** : Aucun

## 🎪 Éléments Animés

### Papiers Flottants
Représentent l'univers de la papèterie :
- **Tailles** : Variées (w-10 à w-20, h-14 à h-24)
- **Couleurs** : `bg-white`, `bg-blue-50`, `bg-gray-50`, `bg-slate-50`
- **Rotations** : Aléatoires (-12° à +12°)
- **Animations** : `float-slow`, `float-slower`, `drift-left`, `drift-right`

### Formes Géométriques
Représentent les fournitures de bureau :
- **Crayon** : Rectangle jaune dégradé, rotation 45°
- **Gomme** : Cercle rouge
- **Règle** : Rectangle bleu horizontal
- **Trombone** : Rectangle gris, rotation 12°

### Grille Subtile
- **Structure** : 12 colonnes
- **Couleur** : `border-gray-300`
- **Visibilité** : Très faible (opacity-3 à opacity-8)

## 🎨 Animations CSS

### `float-slow` (6s)
Mouvement vertical lent (-20px)

### `float-slower` (8s)
Mouvement vertical plus lent (-15px)

### `pencil-float` (7s)
Mouvement spécial pour le crayon (-25px)

### `drift-left` (10s)
Dérive vers la gauche (-10px, -10px)

### `drift-right` (12s)
Dérive vers la droite (+10px, -8px)

## 🚀 Utilisation

### Avec PageWrapper
```tsx
<PageWrapper variant="page" intensity="medium">
  <section>
    {/* Contenu de la page */}
  </section>
</PageWrapper>
```

### Directement avec AnimatedBackground
```tsx
<div className="relative">
  <AnimatedBackground variant="hero" intensity="strong" />
  <div className="relative z-10">
    {/* Contenu */}
  </div>
</div>
```

## 🎨 Personnalisation

### Ajouter une nouvelle variante
1. Modifier `getBackgroundGradient()` dans `AnimatedBackground.tsx`
2. Ajouter la variante dans `elementCount`
3. Mettre à jour les types TypeScript

### Modifier l'intensité
Ajuster les valeurs d'opacité dans `baseOpacity`

### Nouvelles animations
1. Ajouter les keyframes dans `globals.css`
2. Créer les classes utilitaires
3. Intégrer dans le tableau `animations`

## 📱 Responsive

Le système s'adapte automatiquement :
- **Mobile** : Moins d'éléments, animations plus subtiles
- **Desktop** : Tous les éléments visibles
- **Performance** : Optimisé avec `transform` et `opacity`

## ♿ Accessibilité

- **Respect des préférences** : Compatible `prefers-reduced-motion`
- **Contraste** : Éléments suffisamment transparents
- **Performance** : Animations GPU-accelerated
- **Z-index** : Contenu toujours au premier plan

## 🔧 Maintenance

### Performance
- Surveiller le nombre d'éléments animés
- Utiliser `transform` plutôt que `left/top`
- Éviter les animations sur `width/height`

### Cohérence
- Respecter la palette de couleurs
- Maintenir l'équilibre visuel
- Tester sur différents appareils

---

**Ways** - Système de backgrounds animés v1.0
