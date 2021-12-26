## How To Use

Wrapper votre image à l'aide de votre balise html favorite et donnez lui une classe.
Appliquez ensuite la fonction de grillage à l'aide de jQuery


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

You can [download](https://github.com/amitmerchant1990/electron-markdownify/releases/tag/v1.2.0)


## Credits

Created by https://lintermediaire.be


## Related

[animated.css](https://github.com/amitmerchant1990/markdownify-web) if you want a classes


## License

FREE

---
