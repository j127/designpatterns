// "The composite pattern says that a group of objects can be treated in the same manner as an individual object of the group."

// jQuery uses this a lot -- it's the same method for one element or many
$('input').on('click', function() {
    console.log('clicked');
});

// In contrast, YUI3 uses two different methods in order to reduce the chance of bugs
Y.one();
Y.all();

