$('body')
    .append(
        $('h1')
           .text('Todo List')
           .addclass('heading')
    )
    .append(
        $('<div>')
           .append(
               $('<input>')
               .attr('placeholder','Enter New Task')
               .attr('type','text')
               .addclass('newtask')


           )

            
            
    )
    .append(
        $('<button>')
            .text('Add Task')
            .addclass('btn')
    )
    .append(
        $('<ul>')
            .addclass('tasklist')
    )