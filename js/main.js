$(document).ready(function(){

    // Slider de bxslider - plugin jquery
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: false
        });
    }

    if(window.location.href.indexOf('index') > -1){
        // Posts
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el '+moment().date()+'de '+moment().format('MMMM')+'del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, reprehenderit quam! Explicabo, neque aut fugiat perferendis cumque temporibus error quos natus voluptatibus magnam placeat, perspiciatis impedit in facere reiciendis. Nemo repudiandae labore ducimus molestias ratione excepturi animi sapiente error distinctio porro, inventore temporibus assumenda fugit natus, laborum illo, odit iste consectetur soluta voluptatem libero? Excepturi, repellendus, dignissimos cumque dolorem cum mollitia hic placeat ipsum sapiente blanditiis fugit nemo tempora harum pariatur facere, temporibus adipisci nobis. Eveniet cupiditate voluptate officiis sapiente voluptates omnis consectetur numquam. Suscipit, amet. Dolorem delectus officiis dignissimos magnam animi sint dolor sit quam, veniam blanditiis ullam, quia dolore facilis adipisci? Iste laudantium ipsa aut, inventore quo dignissimos molestiae minima non! Omnis cum eveniet natus animi voluptates incidunt unde itaque eligendi. Nemo incidunt inventore sequi tempore, voluptate, exercitationem voluptas, omnis optio nulla sed dolor est accusantium maiores ratione minus eaque alias. Fuga facilis porro commodi? Quo quaerat quos voluptatem culpa distinctio maiores reprehenderit officiis eaque eligendi reiciendis consequatur esse laudantium recusandae nulla qui numquam, consectetur rem sapiente velit iure eos unde amet error consequuntur? Vitae, ducimus repudiandae. Molestias asperiores voluptatum distinctio quisquam quos voluptate architecto accusantium, dolor quidem rerum dignissimos fugiat reprehenderit id accusamus nemo impedit laboriosam. Explicabo.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el '+moment().date()+'de '+moment().format('MMMM')+'del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, reprehenderit quam! Explicabo, neque aut fugiat perferendis cumque temporibus error quos natus voluptatibus magnam placeat, perspiciatis impedit in facere reiciendis. Nemo repudiandae labore ducimus molestias ratione excepturi animi sapiente error distinctio porro, inventore temporibus assumenda fugit natus, laborum illo, odit iste consectetur soluta voluptatem libero? Excepturi, repellendus, dignissimos cumque dolorem cum mollitia hic placeat ipsum sapiente blanditiis fugit nemo tempora harum pariatur facere, temporibus adipisci nobis. Eveniet cupiditate voluptate officiis sapiente voluptates omnis consectetur numquam. Suscipit, amet. Dolorem delectus officiis dignissimos magnam animi sint dolor sit quam, veniam blanditiis ullam, quia dolore facilis adipisci? Iste laudantium ipsa aut, inventore quo dignissimos molestiae minima non! Omnis cum eveniet natus animi voluptates incidunt unde itaque eligendi. Nemo incidunt inventore sequi tempore, voluptate, exercitationem voluptas, omnis optio nulla sed dolor est accusantium maiores ratione minus eaque alias. Fuga facilis porro commodi? Quo quaerat quos voluptatem culpa distinctio maiores reprehenderit officiis eaque eligendi reiciendis consequatur esse laudantium recusandae nulla qui numquam, consectetur rem sapiente velit iure eos unde amet error consequuntur? Vitae, ducimus repudiandae. Molestias asperiores voluptatum distinctio quisquam quos voluptate architecto accusantium, dolor quidem rerum dignissimos fugiat reprehenderit id accusamus nemo impedit laboriosam. Explicabo.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el '+moment().date()+'de '+moment().format('MMMM')+'del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, reprehenderit quam! Explicabo, neque aut fugiat perferendis cumque temporibus error quos natus voluptatibus magnam placeat, perspiciatis impedit in facere reiciendis. Nemo repudiandae labore ducimus molestias ratione excepturi animi sapiente error distinctio porro, inventore temporibus assumenda fugit natus, laborum illo, odit iste consectetur soluta voluptatem libero? Excepturi, repellendus, dignissimos cumque dolorem cum mollitia hic placeat ipsum sapiente blanditiis fugit nemo tempora harum pariatur facere, temporibus adipisci nobis. Eveniet cupiditate voluptate officiis sapiente voluptates omnis consectetur numquam. Suscipit, amet. Dolorem delectus officiis dignissimos magnam animi sint dolor sit quam, veniam blanditiis ullam, quia dolore facilis adipisci? Iste laudantium ipsa aut, inventore quo dignissimos molestiae minima non! Omnis cum eveniet natus animi voluptates incidunt unde itaque eligendi. Nemo incidunt inventore sequi tempore, voluptate, exercitationem voluptas, omnis optio nulla sed dolor est accusantium maiores ratione minus eaque alias. Fuga facilis porro commodi? Quo quaerat quos voluptatem culpa distinctio maiores reprehenderit officiis eaque eligendi reiciendis consequatur esse laudantium recusandae nulla qui numquam, consectetur rem sapiente velit iure eos unde amet error consequuntur? Vitae, ducimus repudiandae. Molestias asperiores voluptatum distinctio quisquam quos voluptate architecto accusantium, dolor quidem rerum dignissimos fugiat reprehenderit id accusamus nemo impedit laboriosam. Explicabo.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el '+moment().date()+'de '+moment().format('MMMM')+'del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, reprehenderit quam! Explicabo, neque aut fugiat perferendis cumque temporibus error quos natus voluptatibus magnam placeat, perspiciatis impedit in facere reiciendis. Nemo repudiandae labore ducimus molestias ratione excepturi animi sapiente error distinctio porro, inventore temporibus assumenda fugit natus, laborum illo, odit iste consectetur soluta voluptatem libero? Excepturi, repellendus, dignissimos cumque dolorem cum mollitia hic placeat ipsum sapiente blanditiis fugit nemo tempora harum pariatur facere, temporibus adipisci nobis. Eveniet cupiditate voluptate officiis sapiente voluptates omnis consectetur numquam. Suscipit, amet. Dolorem delectus officiis dignissimos magnam animi sint dolor sit quam, veniam blanditiis ullam, quia dolore facilis adipisci? Iste laudantium ipsa aut, inventore quo dignissimos molestiae minima non! Omnis cum eveniet natus animi voluptates incidunt unde itaque eligendi. Nemo incidunt inventore sequi tempore, voluptate, exercitationem voluptas, omnis optio nulla sed dolor est accusantium maiores ratione minus eaque alias. Fuga facilis porro commodi? Quo quaerat quos voluptatem culpa distinctio maiores reprehenderit officiis eaque eligendi reiciendis consequatur esse laudantium recusandae nulla qui numquam, consectetur rem sapiente velit iure eos unde amet error consequuntur? Vitae, ducimus repudiandae. Molestias asperiores voluptatum distinctio quisquam quos voluptate architecto accusantium, dolor quidem rerum dignissimos fugiat reprehenderit id accusamus nemo impedit laboriosam. Explicabo.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el '+moment().date()+'de '+moment().format('MMMM')+'del '+moment().format('YYYY'),
                content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, reprehenderit quam! Explicabo, neque aut fugiat perferendis cumque temporibus error quos natus voluptatibus magnam placeat, perspiciatis impedit in facere reiciendis. Nemo repudiandae labore ducimus molestias ratione excepturi animi sapiente error distinctio porro, inventore temporibus assumenda fugit natus, laborum illo, odit iste consectetur soluta voluptatem libero? Excepturi, repellendus, dignissimos cumque dolorem cum mollitia hic placeat ipsum sapiente blanditiis fugit nemo tempora harum pariatur facere, temporibus adipisci nobis. Eveniet cupiditate voluptate officiis sapiente voluptates omnis consectetur numquam. Suscipit, amet. Dolorem delectus officiis dignissimos magnam animi sint dolor sit quam, veniam blanditiis ullam, quia dolore facilis adipisci? Iste laudantium ipsa aut, inventore quo dignissimos molestiae minima non! Omnis cum eveniet natus animi voluptates incidunt unde itaque eligendi. Nemo incidunt inventore sequi tempore, voluptate, exercitationem voluptas, omnis optio nulla sed dolor est accusantium maiores ratione minus eaque alias. Fuga facilis porro commodi? Quo quaerat quos voluptatem culpa distinctio maiores reprehenderit officiis eaque eligendi reiciendis consequatur esse laudantium recusandae nulla qui numquam, consectetur rem sapiente velit iure eos unde amet error consequuntur? Vitae, ducimus repudiandae. Molestias asperiores voluptatum distinctio quisquam quos voluptate architecto accusantium, dolor quidem rerum dignissimos fugiat reprehenderit id accusamus nemo impedit laboriosam. Explicabo.'
            },
        ];

        posts.forEach((item, index) => {
            let post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="" class="button-more">Leer más</a>
            </article>
            `;
            $('#posts').prepend(post);
        });
    }

    // Cambiar tema
    var theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr('href', 'css/green.css');
    });
    $('#to-red').click(function(){
        theme.attr('href', 'css/red.css');
    });
    $('#to-blue').click(function(){
        theme.attr('href', 'css/blue.css');
    });

    // Scroll
    $('.subir').click(function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Login falso
    $('#login form').submit(function(){
        var for_name = $('#form_name').val();

        localStorage.setItem('form_name', for_name);
    });

    var form_name = localStorage.getItem('form_name');
    if(form_name != null && form_name != 'undefined'){
        var about_p = $('#about p');
        about_p.html('<br><strong>Bienvenido, '+form_name+'</strong> ');  
        about_p.append('<a href="" id="logout">Cerrar sesión</a>');

        $('#login').hide();
        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);


    }

    // Form validation
    if(window.location.href.indexOf('contact') > -1){
        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es'
        });
    }

});