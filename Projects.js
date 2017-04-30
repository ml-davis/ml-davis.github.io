const projects = [
    new Project('embeddedSystems',
        `This is an embedded system project which uses a Beaglebone Black, two Atmega328p's, an RC car, and
                    some other components to build a simple self-driving car. It is able to recognize and navigate
                    to target objects as well be controlled through a web application.`,
        'C, C++, OpenCV, Bash, Node JS, AngularJS 2',
        'https://www.youtube.com/embed/5YsZCfJTV1s',
        ['https://github.com/ml-davis/self_driving_car']
    ),
    new Project('nanogram',
        `This is a puzzle-based desktop application. It allows users to create and save their own custom
                    nanograms. It also allows users to solve them along with other randomly generated puzzles.`,
        'Java, JavaFX',
        'https://www.youtube.com/embed/xdYiaJIy8S4',
        ['https://github.com/ml-davis/nanogram']
    ),
    new Project('searchEngine',
        `This project is capable of parsing data into a data structure capable of providing
                    fast and efficient search times.`,
        'Java, JavaFX',
        'https://www.youtube.com/embed/as0ER0kk2Wc',
        ['https://github.com/ml-davis/search_engine_1']
    ),
    new Project('onlineRealEstate',
        `This project was created in order to practice taking I/O from many users and store their
                    information in a database.`,
        'PHP, MySQL, JavaScript, HTML, CSS',
        'https://www.youtube.com/embed/Eflp7wcNjOU',
        ['https://github.com/ml-davis/online_real_estate']
    ),
    new Project('persianTutor',
        `This project was created to help myself learn Farsi, the language of my fiance and her family.`,
        'Java, JavaFX',
        'https://www.youtube.com/embed/qrAtu14MvoA',
        ['https://github.com/ml-davis/persian_tutor.git']
    ),
    new Project('gameOfLife',
        `This is a multi-threaded program built with the intention of running fast. The goal of the project
                    was making the FPS run as high as possible. The project was created three times using different
                    technologies: Intel's Thread Building Blocks, Nvidia's CUDA, and the open-source OpenCL.`,
        'C++ (with TBB), C (with CUDA and OpenCL), OpenGL for graphical interface',
        'https://www.youtube.com/embed/5eOMqYD8FUc',
        ['https://github.com/ml-davis/game_of_life_tbb',
            'https://github.com/ml-davis/game_of_life_cuda',
            'https://github.com/ml-davis/game_of_life_opencl']
    ),
];