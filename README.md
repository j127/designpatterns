# JavaScript Design Patterns

Working through some JavaScript design patterns.

== Types ==

* Creational
* Structural (relationships)
* Behavioral (communication)

== Privacy ==

Something like this:

    var myFunc = (function() {

        var var1, var2;

        var1 = 'Example';

        myInnerFunc = function(something) {
            // do some stuff
        }

        return {
            // public stuff
            aPublicVar = 1234,

            aPublicMethod: function() {
                return aResult;
            }
        }
    });

Then:

    myFunc.aPublicMethod


