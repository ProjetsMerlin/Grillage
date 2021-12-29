Grillade JS
-------

Grillage js décompose une image en plusieurs éléments HTML pour lui donner un effet de grille ou de quadrillage (sur 3 lignes en hauteur). Il est ensuite possible d'appliquer une classe de son choix sur chacun des ses éléments pour leur attribuer un effet d'animation par exemple ou de transition au survol de la souris


### Demo

You can [preview Grillage js there](https://projetsmerlin.github.io/grillage/)

### How TO USE
1. Wrap your image with an html element
2. Import jQuery
3. Import Grillage js
4. Aplly Grillage on your element
5. Apply options if you want


### Example

### CSS (no required)
```bash
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
```

#### SCRIPT
```bash
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/grillage.js"></script>
```

#### grillage

```bash
    $('.yourElement').grillage({
      structure : [
      [33.33,33.33,33.33],
      [20,20,30,30],
      [20,50,20,10],
      ],
      classe : 'grillage__item'
      hoverEffect: "grillage__item--hover",
      borderColor: "yellow",
      borderSize: 3,
    });
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
structure | array | [ [15,15,50,20],[20,20,30,30],[20,70,10],] | Structure of grid. An array for each rows. Each values must be equal to 100% for a perfect design
classe | string | 'grillage__item' | name of your classe
hoverEffect | string | 'grillage__item--hover' | Classe of animate css for hover effect
borderColor | string | '#ffffff' | Color of borders
borderSize | int | 3 | width of borders

### Download

You can [download Grillage js there](https://github.com/ProjetsMerlin/grillage/archive/refs/heads/master.zip)


### Credits

Created by https://lintermediaire.be - 28/12/2021


#### Dependencies

jQuery 3.6.0 - [https://jquery.com/download/](https://jquery.com/download/)


#### Related
[animated.css](https://github.com/amitmerchant1990/markdownify-web) for a lot css animation


### License

FREE

---