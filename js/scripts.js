$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  function generateRandomName() {
    const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller'];
  
    const randomFirstName = getRandomElement(firstNames);
    const randomLastName = getRandomElement(lastNames);
  
    return randomFirstName + ' ' + randomLastName;
  }
  
  function generateRandomUsername() {
    const adjectives = ['Happy', 'Sunny', 'Clever', 'Lucky', 'Gentle', 'Vivid'];
    const nouns = ['Penguin', 'Dolphin', 'Phoenix', 'Lion', 'Tiger', 'Elephant'];
  
    const randomAdjective = getRandomElement(adjectives);
    const randomNoun = getRandomElement(nouns);
  
    return randomAdjective + randomNoun + Math.floor(Math.random() * 100);
  }
const arr = [
    "https://md-desktop.me/#/connect/login/dash/1d1999bfa8154b4c8ab611e6bcf3476f/b506576d-3acf-421a-95fb-e1e34cfc53f4"
]

function getRandomElement(array) {
    // Generate a random index within the array's length
    const randomIndex = Math.floor(Math.random() * array.length);
  
    // Return the element at the randomly selected index
    return array[randomIndex];
  }
  
async function performAPICalls() {
    try {
      // Step 1: Create User
      const getUrlResponse = await getUrlAPI();
      console.log(getUrlResponse)
      openUrlInNewTab(getUrlResponse["url"]);
    } catch (error) {
      // Handle errors and show a message to the user
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }

 

  function createUserAPI() {
    const createUserUrl = 'https://md-desktop.me/api/public/create_user';

    return new Promise((resolve, reject) => {
        const randomName = generateRandomName();
        const randomUsername = generateRandomUsername();
      $.ajax({
        url: createUserUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          "api_key": "qHPkjdyPQctq",
          "api_key_secret": "OI3awX6uYQeF94lr2rlwd4kmK63nRRTE",
          "target_user": {
            "username": `${randomName}`,
            "first_name": `${randomUsername}`,
            "last_name": "",
            "locked": false,
            "disabled": false,
            "organization": "example",
            "phone": "123-456-7890",
            "password": "12345678"
          }
        }),
        dataType: 'json',
        success: resolve,
        error: reject
      });
    });
  }

  function getUrlAPI() {
    const getUrlUrl = 'https://moveasy.md2125cse1047.repl.co/test/';

    return new Promise((resolve, reject) => {
      $.ajax({
        url: getUrlUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}),
        dataType: 'json',
        success: resolve,
        error: reject
      });
    });
  }

  function openUrlInNewTab(url) {
    const newTab = window.open(url, '_blank');
    if (!newTab) {
      alert('Failed to open URL in a new tab. Please allow pop-ups and try again.');
    }
  }



$('.openPage').on('click', function(event) {
    // Preventing the default behavior (navigation to the href)
    console.log("Function called")
    event.preventDefault()
    // Calling the function
    performAPICalls();
  });