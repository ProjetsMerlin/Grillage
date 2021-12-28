Grillade JS
-------

Grillage js décompose une image en plusieurs éléments HTML pour lui donner un effet de grille ou de quadrillage (sur 3 lignes en hauteur). Il est ensuite possible d'appliquer une classe de son choix sur chacun des ses éléments pour leur attribuer un effet d'animation par exemple ou de transition au survol de la souris


### Demo

You can [preview Grillage js there](https://projetsmerlin.github.io/grillage/)


### Example

1. Wrap your image with an html element
2. Import jQuery
3. Import Grillage js
4. Aplly Grillage on your element
5. Apply options of Grillage


```bash

# 1. Your code with grillage
<div class="test">
<img src="your-image?jpg" />
</div>

# 2. add jQuery
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

# 3. add grillage Js
<script src="js/grillage.js"></script>
 
# 4 & 5. add your option configuration
  <script>
    $('.test').grillage({
      borderColor: "yellow",
      borderSize: 3,
      hoverEffect: "animate__shakeX",
      structure : [
      [33.33,33.33,33.33],
      [20,20,30,30],
      [20,50,20,10],
      ],
    });
  </script>
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
borderColor | string | '#ffffff' | Color of borders
borderSize | int | 3 | width of borders
hoverEffect | string | 'animate__fadeIn' | Classe of animate css for hover effect

structure | array | [
      [15,15,50,20],
      [20,20,30,30],
      [20,70,10],
      ], | Structure of grid. An array for each rows. Each values must be eqal to 100

### Download

You can [download Grillage js there](https://github.com/ProjetsMerlin/grillage/archive/refs/heads/master.zip)


### Credits

Created by https://lintermediaire.be - 28/12/2021


#### Dependencies

jQuery 3.6.0 - [https://jquery.com/download/] (https://jquery.com/download/)


#### Related
[animated.css](https://github.com/amitmerchant1990/markdownify-web) for a lot css animation


### License

FREE

---