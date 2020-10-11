// let component;
// const initialData = {
//     components: {
//         'led0': {id: 'capsLock', r: 0, g: 0, b: 0},
//         'led1': {id: 'bit1', r: 0, g: 0, b: 0},
//         'led2': {id: 'bit0', r: 0, g: 0, b: 0},
//         'knob0': {id: 'knob', single: null, double: null, long: null, antiClkwise: null, clkwise: null},
//         'key0': {id: 'key1', active: 'funcOption', func: {id: null, desc: null, type: null}, str: 'test', ln: 'test'},
//         'key1': {id: 'key2', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//         'key2': {id: 'key3', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//         'key3': {id: 'key4', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//         'key4': {id: 'key5', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//         'key5': {id: 'key6', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//         'key6': {id: 'key7', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//         'key7': {id: 'key8', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//         'key8': {id: 'key9', active: 'funcOption', func: {id: null, desc: null, type: null}, str: null, ln: null},
//     },
//     options: {
//         mediaOptions: {
//             'Mute': {code: 'Consumer.write(MEDIA_VOLUME_MUTE);', desc: 'Mute'},
//             'Volumeup': {code: 'Consumer.write(MEDIA_VOLUME_UP);', desc: 'Volume up'},
//             'Volumedown': {code: 'Consumer.write(MEDIA_VOLUME_DOWN);', desc: 'Volume down'},
//         },
//         layerOptions: {
//             'Layer1': {code: '1', desc: '1'},
//             'Layer2': {code: '2', desc: '2'},
//         },
//         ledOptions: {
//         }
//     },
// }

const initialData = {
    comp: {
        layer0: {
            main: {
                'knob0': {
                    single: {
                        active: 'func',
                        func: 'Volume up',
                        str: 'str test',
                        ln: 'ln test',
                        ctrl: '',
                        shift: '',
                        alt: '',
                        gui: '',
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            },
            sub: {
                'knob0': {
                    single: {
                        active: 'func', 
                        func: '',
                        str: '',
                        ln: ''
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            }
        },
        layer1: {
            main: {
                'knob0': {
                    single: {
                        active: 'func', 
                        func: '',
                        str: '',
                        ln: ''
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            },
            sub: {
                'knob0': {
                    single: {
                        active: 'func', 
                        func: '',
                        str: '',
                        ln: ''
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            }
        },
        layer2: {
            main: {
                'knob0': {
                    single: {
                        active: 'func', 
                        func: '',
                        str: '',
                        ln: ''
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            },
            sub: {
                'knob0': {
                    single: {
                        active: 'func', 
                        func: '',
                        str: '',
                        ln: ''
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            }
        },
        layer3: {
            main: {
                'knob0': {
                    single: {
                        active: 'func', 
                        func: '',
                        str: '',
                        ln: ''
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            },
            sub: {
                'knob0': {
                    single: {
                        active: 'func', 
                        func: '',
                        str: '',
                        ln: ''
                    },
                    double: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    long: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    antiClk: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    },
                    clkwise: {
                        active: 'func',
                        func: '',
                        str: '',
                        ln: ''
                    }
                },
                'led0': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led1': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'led2': {
                    indicate: '',
                    r: 255,
                    g: 255,
                    b: 255,
                },
                'key1': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key2': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key3': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key4': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key5': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key6': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key7': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key8': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
                'key9': {
                    active: 'func',
                    func: '',
                    str: '',
                    ln: ''
                },
            }
        },
    },
    keycode: {
        'Volume up': 'Consumer.write(MEDIA_VOLUME_UP);',
        'Volume down': 'Consumer.write(MEDIA_VOLUME_DOWN);',
        'Volume mute': 'Consumer.write(MEDIA_VOLUME_MUTE);',
        'Fast forward': 'Consumer.write(MEDIA_FAST_FORWARD);',
        'Rewind': 'Consumer.write(MEDIA_REWIND);',
        'Next': 'Consumer.write(MEDIA_NEXT);',
        'Previous': 'Consumer.write(MEDIA_PREVIOUS);',
        'Stop': 'Consumer.write(MEDIA_STOP);',
        'Play/Pause': 'Consumer.write(MEDIA_PLAY_PAUSE);',
        'Email reader': 'Consumer.write(CONSUMER_EMAIL_READER);',
        'Calculator': 'Consumer.write(CONSUMER_CALCULATOR);',
        'Explorer': 'Consumer.write(CONSUMER_EXPLORER);',
        'Browser home': 'Consumer.write(CONSUMER_BROWSER_HOME);',
        'Browser back': 'Consumer.write(CONSUMER_BROWSER_BACK);',
        'Browser forward': 'Consumer.write(CONSUMER_BROWSER_FORWARD);',
        'Browser refresh': 'Consumer.write(CONSUMER_BROWSER_REFRESH);',
        'Browser bookmarks': 'Consumer.write(CONSUMER_BROWSER_BOOKMARKS);',

        'Layer up': '',
        'Layer down': '',

        'bit0': '',
        'bit1': '',

        'F1': 'Keyboard.press(KEY_F1);',
        'F2': 'Keyboard.press(KEY_F2);',
        'F3': 'Keyboard.press(KEY_F3);',
        'F4': 'Keyboard.press(KEY_F4);',
        'F5': 'Keyboard.press(KEY_F5);',
        'F6': 'Keyboard.press(KEY_F6);',
        'F7': 'Keyboard.press(KEY_F7);',
        'F8': 'Keyboard.press(KEY_F8);',
        'F9': 'Keyboard.press(KEY_F9);',
        'F10': 'Keyboard.press(KEY_F10);',
        'F11': 'Keyboard.press(KEY_F11);',
        'F12': 'Keyboard.press(KEY_F12);',
        'Up': 'Keyboard.press(KEY_UP_ARROW);',
        'Down': 'Keyboard.press(KEY_DOWN_ARROW);',
        'Left': 'Keyboard.press(KEY_LEFT_ARROW);',
        'Right': 'Keyboard.press(KEY_RIGHT_ARROW);',
        'Backspace': 'Keyboard.press(KEY_BACKSPACE);',
        'Tab': 'Keyboard.press(KEY_TAB);',
        'Return': 'Keyboard.press(KEY_RETURN);',
        'Esc': 'Keyboard.press(KEY_ESC);',
        'Insert': 'Keyboard.press(KEY_INSERT);',
        'Delete': 'Keyboard.press(KEY_DELETE);',
        'Page up': 'Keyboard.press(KEY_PAGE_UP);',
        'Page down': 'Keyboard.press(KEY_PAGE_DOWN);',
        'Home': 'Keyboard.press(KEY_HOME);',
        'End': 'Keyboard.press(KEY_END);',
        'Capslock': 'Keyboard.press(KEY_CAPS_LOCK);',
    },
    options: {
        media: [
            'Volume up',
            'Volume down',
            'Volume mute',
            'Fast forward',
            'Rewind',
            'Next',
            'Previous',
            'Stop',
            'Play/Pause',
            'Email reader',
            'Calculator',
            'Explorer',
            'Browser home',
            'Browser back',
            'Browser forward',
            'Browser refresh',
            'Browser bookmarks'
        ],
        layer: [
            'Layer up',
            'Layer down',
        ],
        led: [
            'bit0',
            'bit1',
        ],
        modKey: [
            'F1',
            'F2',
            'F3',
            'F4',
            'F5',
            'F6',
            'F7',
            'F8',
            'F9',
            'F10',
            'F11',
            'F12',
            'Up',
            'Down',
            'Left',
            'Right',
            'Backspace',
            'Tab',
            'Return',
            'Esc',
            'Insert',
            'Delete',
            'Page up',
            'Page down',
            'Home',
            'End',
            'Capslock',
        ]
    }
}
let component;
let compGroup;
let knobDetail;
let currentLayer = 'layer0';
let currentSubLayer = 'main';
let currentOption = 'media';

//check if localData exists. If not use initialData
let localData = JSON.parse(localStorage.getItem('keypadConfig'));
if(!localData) {
    localData = initialData;
}

//create layers tab and load initial option
let layerIndex = 0;
for(layer in localData.comp) {
    $('#layerTabContainer').append(`<span id="${layer}" class="layerTab ${(layerIndex==0)?'active':''}">Layer ${layerIndex}</span>`);
    layerIndex++;
}
loadOptions();

//load options
function loadOptions() {
    $('#optionContainer').empty();
    initialData.options[currentOption].forEach(option => 
        $('#optionContainer').append(`<div class="optionTile"><span>${option}</span></div>`)
    );
    optionClicked();
}

//layer tab
$('.layerTab').click(function() {
    if(!$(this).hasClass('active')) {
        const id = $(this).attr('id');
        $('.layerTab.active').toggleClass('active');
        $(`#${id}`).toggleClass('active');
        currentLayer = id;
    }
    switch(compGroup) {
        case 'knob':
            loadKnobDetails();
            break;
        case 'led':
            loadLedDetails();
            break;
        case 'key':
            loadKeyDetails();
            break;

        default:
            break;
    }
});

//subLayer tab
$('.subLayerTab').click(function() {
    if(!$(this).hasClass('active')) {
        const id = $(this).attr('id');
        $('.subLayerTab.active').toggleClass('active');
        $(`#${id}`).toggleClass('active');
        currentSubLayer = id;
    }
    switch(compGroup) {
        case 'knob':
            loadKnobDetails();
            break;
        case 'led':
            loadLedDetails();
            break;
        case 'key':
            loadKeyDetails();
            break;

        default:
            break;
    }
});

//options tab
$('.optionsTab').click(function() {
    if(!$(this).hasClass('active')) {
        const id = $(this).attr('id');
        $('.optionsTab.active').toggleClass('active');
        $(`#${id}`).toggleClass('active');
        currentOption = id;
    }
    loadOptions();
});

//when component is selected. load details.
$('.components').click(function() {
    const id = $(this).attr('id');
    component = id;
    $('#name').html(id);
    //work out component group
    compGroup = id.slice(0,-1);
    switch(compGroup) {
        case 'knob':
            loadKnobDetails();
            break;
        case 'led':
            loadLedDetails();
            break;
        case 'key':
            loadKeyDetails();
            break;

        default:
            break;
    }
});

function loadLedDetails() {
    knobDetail = undefined;
    $('#detailContainer').empty();
    const indicate = localData.comp[currentLayer][currentSubLayer][component].indicate;
    let r = localData.comp[currentLayer][currentSubLayer][component].r;
    let g = localData.comp[currentLayer][currentSubLayer][component].g;
    let b = localData.comp[currentLayer][currentSubLayer][component].b;
    $('#detailContainer').append(`
        <div>Indicate: <spand id="indicate">${indicate}</spand></div>
        <button class="layerApplyBtns" id="layersIndBtn" type="button">Apply to all ${currentSubLayer} layers</button>
        <button class="layerApplyBtns" id="subLayersIndBtn" type="button">Apply to ${(currentSubLayer=='main')?"sub":"main"} layer</button>`
    );
    $('#detailContainer').append(`<div class="wrap"><div class="colorPicker"></div></div>`);
    $('#detailContainer').append(`
        <button class="layerApplyBtns" id="layersColorBtn" type="button">Apply color to all ${currentSubLayer} layers</button>
        <button class="layerApplyBtns" id="subLayersColorBtn" type="button">Apply color to ${(currentSubLayer=='main')?"sub":"main"} layer</button>`
    );
    //create colorwheel
    let colorPicker = new iro.ColorPicker(".colorPicker", {
        width: 230,
        color: `rgb(${r}, ${g}, ${b})`,
        borderWidth: 1,
        borderColor: "#fff",
    });
    $('.wrap').append(
        `<div id="rgbValues">
            R: ${r}<br>
            G: ${g}<br>
            B: ${b}
        </div>`
    );
    //when color wheel changed
    colorPicker.on(["color:change"], function(color){
        r = color.red;
        g = color.green;
        b = color.blue;
        $('#rgbValues').empty();
        $('#rgbValues').html(
            `R: ${r}<br>
            G: ${g}<br>
            B: ${b}`
        );
        localData.comp[currentLayer][currentSubLayer][component].r = r;
        localData.comp[currentLayer][currentSubLayer][component].g = g;
        localData.comp[currentLayer][currentSubLayer][component].b = b;
        saveToLocal();
    });
    //when layerApplyBtns pressed
    $('.layerApplyBtns').click(function() {
        const id = $(this).attr('id');
        switch(id) {
            case 'layersIndBtn':
                for(layer in localData.comp) {
                    localData.comp[layer][currentSubLayer][component].indicate = indicate;
                }
                break;
            case 'subLayersIndBtn':
                localData.comp[currentLayer][(currentSubLayer=='main')?"sub":"main"][component].indicate = indicate;
                break;
            case 'layersColorBtn':
                for(layer in localData.comp) {
                    localData.comp[layer][currentSubLayer][component].r = r;
                    localData.comp[layer][currentSubLayer][component].g = g;
                    localData.comp[layer][currentSubLayer][component].b = b;
                }
                break;
            case 'subLayersColorBtn':
                localData.comp[currentLayer][(currentSubLayer=='main')?"sub":"main"][component].r = r;
                localData.comp[currentLayer][(currentSubLayer=='main')?"sub":"main"][component].g = g;
                localData.comp[currentLayer][(currentSubLayer=='main')?"sub":"main"][component].b = b;
                break;

            default:
                break;
        }
        saveToLocal();
    });
}

function loadKeyDetails() {
    knobDetail = undefined;
    $('#detailContainer').empty();
    const keyActive = localData.comp[currentLayer][currentSubLayer][component].active;
    const keyFunc = localData.comp[currentLayer][currentSubLayer][component].func;
    const keyStr = localData.comp[currentLayer][currentSubLayer][component].str;
    const keyLn = localData.comp[currentLayer][currentSubLayer][component].ln;
    $('#detailContainer').append(
        `<div id="keyDetail">
            <input type="radio" class="detailRadio" name="${component}" id="keyFuncOption" value="func" ${(keyActive=='func')?"checked":""}>
            <label for="keyFuncOption">Funciton key: </label>
            <span id="funcKey">${keyFunc}</span><br>
            <input type="radio" class="detailRadio" name="${component}" id="keyStrOption" value="str" ${(keyActive=='str')?"checked":""}>
            <label for="keyStrOption">String: </label>
            <input type="text" class="detailInput str" value="${keyStr}"><br>
            <input type="radio" class="detailRadio" name="${component}" id="keyLnOption" value="ln" ${(keyActive=='ln')?"checked":""}>
            <label for="keyLnOption">Line: </label>
            <input type="text" class="detailInput ln" value="${keyLn}">

        </div>`
    );
    //when input is changed
    inputEdited();
    //when radio btn changed
    radioChanged();
}

function loadKnobDetails() {
    $('#detailContainer').empty();
    const singleActive = localData.comp[currentLayer][currentSubLayer][component].single.active;
    const singleFunc = localData.comp[currentLayer][currentSubLayer][component].single.func;
    const singleStr = localData.comp[currentLayer][currentSubLayer][component].single.str;
    const singleLn = localData.comp[currentLayer][currentSubLayer][component].single.ln;

    const doubleActive = localData.comp[currentLayer][currentSubLayer][component].double.active;
    const doubleFunc = localData.comp[currentLayer][currentSubLayer][component].double.func;
    const doubleStr = localData.comp[currentLayer][currentSubLayer][component].double.str;
    const doubleLn = localData.comp[currentLayer][currentSubLayer][component].double.ln;

    const longActive = localData.comp[currentLayer][currentSubLayer][component].long.active;
    const longFunc = localData.comp[currentLayer][currentSubLayer][component].long.func;
    const longStr = localData.comp[currentLayer][currentSubLayer][component].long.str;
    const longLn = localData.comp[currentLayer][currentSubLayer][component].long.ln;
    
    const antiClkActive = localData.comp[currentLayer][currentSubLayer][component].antiClk.active;
    const antiClkFunc = localData.comp[currentLayer][currentSubLayer][component].antiClk.func;
    const antiClkStr = localData.comp[currentLayer][currentSubLayer][component].antiClk.str;
    const antiClkLn = localData.comp[currentLayer][currentSubLayer][component].antiClk.ln;
    
    const clkwiseActive = localData.comp[currentLayer][currentSubLayer][component].clkwise.active;
    const clkwiseFunc = localData.comp[currentLayer][currentSubLayer][component].clkwise.func;
    const clkwiseStr = localData.comp[currentLayer][currentSubLayer][component].clkwise.str;
    const clkwiseLn = localData.comp[currentLayer][currentSubLayer][component].clkwise.ln;
    $('#detailContainer').append(
    `<div id="single" class="knobDetail ${(knobDetail=="single")?"selected":""}">
        Single click:<br>
        <input type="radio" class="detailRadio" name="single" id="singleFuncOption" value="func" ${(singleActive=='func')?"checked":""}>
        <label for="singleFuncOption">Function key: </label>
        <span id="funcSingle">${singleFunc}</span><br>
        <input type="radio" class="detailRadio" name="single" id="singleStrOption" value="str" ${(singleActive=='str')?"checked":""}>
        <label for="singleStrOption">String: </label>
        <input type="text" class="detailInput str" value="${singleStr}"><br>
        <input type="radio" class="detailRadio" name="single" id="singleLnOption" value="ln" ${(singleActive=='ln')?"checked":""}>
        <label for="singleLnOption">Line: </label>
        <input type="text" class="detailInput ln" value="${singleLn}"><br>
        <button type="button" class="applyLayerBtns applyToLayers" id="singleLayers">Apply to all ${currentSubLayer} layers</button>
        <button type="button" class="applyLayerBtns applyToSub" id="singleSubLayers">Apply to ${(currentSubLayer=='main')?"sub":"main"} layer</button>
    </div>
    
    <div id="double" class="knobDetail ${(knobDetail=="double")?"selected":""}">
        Double click:<br>
        <input type="radio" class="detailRadio" name="double" id="doubleFuncOption" value="func" ${(doubleActive=='func')?"checked":""}>
        <label for="doubleFuncOption">Function key: </label>
        <span id="funcDouble">${doubleFunc}</span><br>
        <input type="radio" class="detailRadio" name="double" id="doubleStrOption" value="str" ${(doubleActive=='str')?"checked":""}>
        <label for="doubleStrOption">String: </label>
        <input type="text" class="detailInput str" value="${doubleStr}"><br>
        <input type="radio" class="detailRadio" name="double" id="doubleLnOption" value="ln" ${(doubleActive=='ln')?"checked":""}>
        <label for="doubleLnOption">Line: </label>
        <input type="text" class="detailInput ln" value="${doubleLn}"><br>
        <button type="button" class="applyLayerBtns applyToLayers" id="doubleLayers">Apply to all ${currentSubLayer} layers</button>
        <button type="button" class="applyLayerBtns applyToSub" id="doubleSubLayers">Apply to ${(currentSubLayer=='main')?"sub":"main"} layer</button>    
    </div>
    
    <div id="long" class="knobDetail ${(knobDetail=="long")?"selected":""}">
        Long click:<br>
        <input type="radio" class="detailRadio" name="long" id="longFuncOption" value="func" ${(longActive=='func')?"checked":""}>
        <label for="longFuncOption">Function key: </label>
        <span id="funcLong">${longFunc}</span><br>
        <input type="radio" class="detailRadio" name="long" id="longStrOption" value="str" ${(longActive=='str')?"checked":""}>
        <label for="longStrOption">String: </label>
        <input type="text" class="detailInput str" value="${longStr}"><br>
        <input type="radio" class="detailRadio" name="long" id="longLnOption" value="ln" ${(longActive=='ln')?"checked":""}>
        <label for="longLnOption">Line: </label>
        <input type="text" class="detailInput ln" value="${longLn}"><br>
        <button type="button" class="applyLayerBtns applyToLayers" id="longLayers">Apply to all ${currentSubLayer} layers</button>
        <button type="button" class="applyLayerBtns applyToSub" id="longSubLayers">Apply to ${(currentSubLayer=='main')?"sub":"main"} layer</button>    
    </div>

    <div id="antiClk" class="knobDetail ${(knobDetail=="antiClk")?"selected":""}">
        Anti-Clockwise:<br>
        <input type="radio" class="detailRadio" name="antiClk" id="antiClkFuncOption" value="func" ${(antiClkActive=='func')?"checked":""}>
        <label for="antiClkFuncOption">Function key: </label>
        <span id="funcAntiClk">${antiClkFunc}</span><br>
        <input type="radio" class="detailRadio" name="antiClk" id="antiClkStrOption" value="str" ${(antiClkActive=='str')?"checked":""}>
        <label for="antiClkStrOption">String: </label>
        <input type="text" class="detailInput str" value="${antiClkStr}"><br>
        <input type="radio" class="detailRadio" name="antiClk" id="antiClkLnOption" value="ln" ${(antiClkActive=='ln')?"checked":""}>
        <label for="antiClkLnOption">Line: </label>
        <input type="text" class="detailInput ln" value="${antiClkLn}"><br>
        <button type="button" class="applyLayerBtns applyToLayers" id="antiClkLayers">Apply to all ${currentSubLayer} layers</button>
        <button type="button" class="applyLayerBtns applyToSub" id="antiClkSubLayers">Apply to ${(currentSubLayer=='main')?"sub":"main"} layer</button>    
    </div>

    <div id="clkwise" class="knobDetail ${(knobDetail=="clkwise")?"selected":""}">
        Clockwise:<br>
        <input type="radio" class="detailRadio" name="clkwise" id="clkwiseFuncOption" value="func" ${(clkwiseActive=='func')?"checked":""}>
        <label for="clkwiseFuncOption">Function key: </label>
        <span id="funcClkwise">${clkwiseFunc}</span><br>
        <input type="radio" class="detailRadio" name="clkwise" id="clkwiseStrOption" value="str" ${(clkwiseActive=='str')?"checked":""}>
        <label for="clkwiseStrOption">String: </label>
        <input type="text" class="detailInput str" value="${clkwiseStr}"><br>
        <input type="radio" class="detailRadio" name="clkwise" id="clkwiseLnOption" value="ln" ${(clkwiseActive=='ln')?"checked":""}>
        <label for="clkwiseLnOption">Line: </label>
        <input type="text" class="detailInput ln" value="${clkwiseLn}"><br>
        <button type="button" class="applyLayerBtns applyToLayers" id="clkwiseLayers">Apply to all ${currentSubLayer} layers</button>
        <button type="button" class="applyLayerBtns applyToSub" id="clkwiseSubLayers">Apply to ${(currentSubLayer=='main')?"sub":"main"} layer</button>
    </div>`
    );
    //when input area is changed
    inputEdited();
    //when radio btns changed
    radioChanged();
    //to select between single, double etc.
    $('.knobDetail').on("mousedown", function() {
        knobDetail = $(this).attr('id');
        $('.knobDetail.selected').toggleClass('selected');
        $(`#${knobDetail}`).toggleClass('selected');
    });
    //when applyLayerBtns is pressed
    $('.applyLayerBtns').click(function() {
        const applyType = this.classList[1];
        const newActive = localData.comp[currentLayer][currentSubLayer][component][knobDetail].active;
        const newVal = localData.comp[currentLayer][currentSubLayer][component][knobDetail][newActive];
        console.log(newVal);
        switch(applyType) {
            case 'applyToLayers':
                for(layer in localData.comp) {
                    localData.comp[layer][currentSubLayer][component][knobDetail][newActive] = newVal;
                }
                break;
            case 'applyToSub':
                localData.comp[currentLayer][(currentSubLayer=='main')?"sub":"main"][component][knobDetail][newActive] = newVal;
                break;
            
            default:
                break;
        }
        saveToLocal();
    });
}

//when option is clicked
function optionClicked() {
    $('.optionTile').click(function() {
        const func = $(this).children().text();
        if(component) {
            switch(compGroup) {
                case 'led':
                    localData.comp[currentLayer][currentSubLayer][component].indicate = func;
                    loadLedDetails();
                    break;
                case 'key':
                    localData.comp[currentLayer][currentSubLayer][component].func = func;
                    loadKeyDetails();
                    break;
                case 'knob':
                    localData.comp[currentLayer][currentSubLayer][component][knobDetail].func = func;
                    loadKnobDetails();
                    break;
                
                default:
                    break;
            }
            saveToLocal();
        }
    });
}

//when detailInput is edited
function inputEdited() {
    $('.detailInput').on("input", function(e) {
        const inputType = this.classList[1];
        const newVal = e.target.value;
        if(!knobDetail) {   //for key
            localData.comp[currentLayer][currentSubLayer][component][inputType] = newVal;
        } else {    //for knob
            localData.comp[currentLayer][currentSubLayer][component][knobDetail][inputType] = newVal;
        }
        saveToLocal();
    });
}

//when radio btn are changed
function radioChanged() {
    $('.detailRadio').click(function() {
        const type = $(this).val();
        const detail = $(this).attr('name');
        if(detail != component) {     //for knob
            localData.comp[currentLayer][currentSubLayer][component][detail].active = type;
        } else {    //for key
            localData.comp[currentLayer][currentSubLayer][component].active = type;
        }
        saveToLocal();
    });
}

//save to localStorage
function saveToLocal() {
    localStorage.setItem('keypadConfig', JSON.stringify(localData));
}