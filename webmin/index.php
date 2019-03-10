<!doctype html>
<html lang="es">

<head>
    <title>Akbal.tk Webmin</title>

    <?php include '/webroot/akbal.tk/php/dependenciasCSS.php'; ?>

    <!-- CSS especifico -->

    <link rel="stylesheet" href="/css/webmin.css">

</head>

<body>

    <!-- ----------- Navigation bar ----------- -->

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark shadow">

        <a class="navbar-brand display-1" href="../">Akbal.tk</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

            <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">

                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="tooltip" data-placement="top" title="En desarrollo!">Server Manager</a>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" href="#" data-toggle="tooltip" data-placement="auto" title="Ya estas aqui!">Minecraft Manager</a>
                </li>


            </ul>
        </div>
    </nav>

    <!-- ----------- Cuerpo real ----------- -->

    <!-- --- Contenido 1 --- -->

    <div id="cuerpo" class="container">
        <div class="row">
            <div class="col-sm-8">

                <div id="consola" class="border-0 rounded shadow">
                    <xmp id="console-text"></xmp>
                </div>

                <div>
                    <textarea id="comandos" class="border-0 rounded shadow" placeholder="Escribe el comando aqui!"></textarea>
                </div>

            </div>

            <!-- --- Contenido 2 --- -->

            <div id="cuerpo" class="col-sm-4 text-center">
                <h3>Opciones</h3>

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary">Iniciar</button>
                    <button type="button" class="btn btn-secondary">Parar</button>
                </div>

                <div id="cuerpo">
                    <h4>Velocidad Actualizacion</h4>
                    <form class="range-field">
                        <input type="range" min="1" max="60" value="5" id="selectorVelocidad" class="slider" title="5" />
                    </form>
                </div>

            </div>
        </div>
    </div>

    <?php include '/webroot/akbal.tk/php/dependenciasJS.php'; ?>

    <!-- JavaScript especifico -->
    <script src="/js/webmin.js"></script>

</body>

</html>
