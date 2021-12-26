#Introduction

Grillage js décompose une image en plusieurs colonnes et sur 3 lignes en hauteurs, pour donner un effet de grille. Il est ensuite possible d'appliquer une classe de son choix sur chacun des ses éléments pour leur attribuer un effet d'animation par exemple.



## How To Use

1. Wrap your image with an html element
2. import jQuery
3. import grillage js
4. Aplly grillage & grillage options


```bash
#Your origin code
<img src="your-image?jpg" />

#Your code with grillage
<div class="test">
<img src="your-image?jpg" />
</div>

#add grillage Js
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
 <script src="js/grillage.js"></script>
 
#add yout configuration
  <script>
    $('.test').grillage({
      borderColor: "yellow",
      borderSize: "3px",
      hoverEffect: "animate__shakeX",
      structure : [
      [33.33,33.33,33.33],
      [20,20,30,30],
      [20,50,20,10],
      ],
    });
  </script>
```


## Download

You can [download](https://projetsmerlin.github.io/grillage/)


## Credits

Created by https://lintermediaire.be


## Related

[animated.css](https://github.com/amitmerchant1990/markdownify-web) if you want a classes


## License

FREE

---
