/* ==========================================================================
   GOLABTOON SHOP — Pure Static Vanilla JS Storefront
   Zero React / Zero Vite / Relative ./assets/ paths for GitHub Pages
   ========================================================================== */
(function () {
  'use strict';

  var OFFICIAL_LOGO_URL = './assets/images/logo.jpg';

  var IMAGE_ASSETS = {
    heroTable: './assets/images/hero_persian_table.jpg',
    distillates: './assets/images/cat_herbal_distillates.jpg',
    pickles: './assets/images/cat_homemade_pickles.jpg',
    jams: './assets/images/cat_jams_syrups.jpg',
    syrups: './assets/images/cat_traditional_syrups.jpg',
    spices: './assets/images/cat_spices_condiments.jpg',
    localFoods: './assets/images/cat_local_foods.jpg',
    brandStory: './assets/images/brand_story_kitchen.jpg',
  };

  var STORAGE_KEYS = {
    cart: 'golabtoon_cart_v1',
    wishlist: 'golabtoon_wishlist_v1',
    orders: 'golabtoon_orders_v1',
    addresses: 'golabtoon_addresses_v1',
    profile: 'golabtoon_profile_v1',
  };

  var FREE_SHIPPING_THRESHOLD = 1500000;
  var BASE_SHIPPING_COST = 85000;
  var PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  var ANNOUNCEMENTS = [
    'به دنیای خوش‌طعم گلابتون شاپ خوش آمدید 🌿',
    'طعم‌های اصیل و خانگی، با عشق برای شما',
    'از دل طبیعت، به سفره‌های گرم شما',
  ];

  var CATEGORIES = [
    {
      slug: 'distillates',
      title: 'عرقیجات گیاهی',
      shortTitle: 'عرقیجات',
      description: 'تقطیر سنتی با عطر تازه گیاهان کوهستانی و باغ‌های ایرانی',
      image: IMAGE_ASSETS.distillates,
      seasonTag: 'فصل بهار',
    },
    {
      slug: 'pickles',
      title: 'ترشیجات خانگی',
      shortTitle: 'ترشیجات',
      description: 'ترشی‌های رنگارنگ و خوش‌عطر با سرکه خانگی و سبزیجات معطر',
      image: IMAGE_ASSETS.pickles,
      seasonTag: 'فصل پاییز',
    },
    {
      slug: 'jams',
      title: 'مربا و شیره‌های خانگی',
      shortTitle: 'مربا و شیره',
      description: 'پخت آرام و خانگی با میوه‌های تازه فصل و عطر هل و زعفران',
      image: IMAGE_ASSETS.jams,
      seasonTag: 'صبحانه‌های اصیل',
    },
    {
      slug: 'syrups',
      title: 'شربت‌های سنتی',
      shortTitle: 'شربت‌ها',
      description: 'شربت‌های خنک و مجلسی با عصاره گل محمدی، بیدمشک و زعفران',
      image: IMAGE_ASSETS.syrups,
      seasonTag: 'فصل تابستان',
    },
    {
      slug: 'spices',
      title: 'ادویه و چاشنی',
      shortTitle: 'ادویه و چاشنی',
      description: 'ادویه‌های آسیاب‌شده تازه، سماق، لیمو عمانی و سبزی‌های خشک',
      image: IMAGE_ASSETS.spices,
      seasonTag: 'طعم‌ساز سفره',
    },
    {
      slug: 'local-foods',
      title: 'خوراکی‌های محلی',
      shortTitle: 'خوراکی‌های محلی',
      description: 'رنگینک، انجیر خشک، رب انار خانگی و خوراکی‌های دست‌ساز',
      image: IMAGE_ASSETS.localFoods,
      seasonTag: 'فصل زمستان',
    },
  ];

  var PRODUCTS = [
    {
      id: 'p-1',
      slug: 'aragh-nana',
      name: 'عرق نعنای دوآتیشه خانگی',
      category: 'distillates',
      categoryLabel: 'عرقیجات گیاهی',
      price: 185000,
      weight: '۷۵۰ میلی‌لیتر',
      inStock: true,
      badge: 'پرفروش',
      ratingPlaceholder: 4.8,
      reviewCountPlaceholder: 18,
      image: IMAGE_ASSETS.distillates,
      gallery: [IMAGE_ASSETS.distillates, IMAGE_ASSETS.heroTable, IMAGE_ASSETS.brandStory],
      shortDescription: 'عرق نعنای معطر و خالص تهیه‌شده از برگ نعنای تازه با عطر تند و دلپذیر خانگی.',
      fullDescription:
        'عرق نعنای گلابتون شاپ از برگ‌های تازه و دست‌چین نعنای باغی با روش تقطیر سنتی و در ظرف‌های شیشه‌ای بسته‌بندی می‌شود. مناسب برای مصرف روزانه، ترکیب در شربت‌های تابستانی یا سرو پس از وعده‌های غذایی.',
      ingredients: ['برگ نعنای تازه باغی', 'آب چشمه تصفیه‌شده'],
      specifications: [
        { label: 'حجم خالص', value: '۷۵۰ میلی‌لیتر' },
        { label: 'نوع بسته‌بندی', value: 'بطری شیشه‌ای با درپوش چوب‌پنبه‌ای و روبان کتان' },
        { label: 'روش تهیه', value: 'تقطیر سنتی آرام' },
        { label: 'خاستگاه تولید', value: 'توضیح قابل ویرایش توسط فروشگاه' },
      ],
      storageInstructions:
        'در جای خشک، خنک و به دور از تابش مستقیم نور خورشید نگهداری شود. پس از باز شدن درب بطری، در یخچال قرار دهید.',
      packagingNote: 'ارسال در بسته‌بندی محافظ دولایه ضدضربه مخصوص بطری‌های شیشه‌ای.',
      variants: [
        { id: 'v-500', label: '۵۰۰ میلی‌لیتر', price: 145000 },
        { id: 'v-750', label: '۷۵۰ میلی‌لیتر', price: 185000 },
        { id: 'v-1000', label: '۱ لیتر', price: 235000 },
      ],
      popularityScore: 98,
      season: 'بهار',
    },
    {
      id: 'p-2',
      slug: 'aragh-bidmeshk',
      name: 'عرق بیدمشک بهاری',
      category: 'distillates',
      categoryLabel: 'عرقیجات گیاهی',
      price: 220000,
      weight: '۷۵۰ میلی‌لیتر',
      inStock: true,
      badge: 'محبوب',
      ratingPlaceholder: 4.9,
      reviewCountPlaceholder: 14,
      image: IMAGE_ASSETS.distillates,
      gallery: [IMAGE_ASSETS.distillates, IMAGE_ASSETS.syrups, IMAGE_ASSETS.heroTable],
      shortDescription: 'عطر لطیف شکوفه‌های بیدمشک بهاری، ایده‌آل برای شربت‌های سنتی و دسرهای ایرانی.',
      fullDescription:
        'عرق بیدمشک یکی از خوش‌عطرترین نوشیدنی‌های بهاری ایران است که از شکوفه‌های تازه بیدمشک در فصل بهار تقطیر می‌شود. عطر ملایم و ماندگار آن، شربت‌ها و چای عصرانه شما را به یاد باغ‌های قدیمی می‌اندازد.',
      ingredients: ['شکوفه تازه بیدمشک', 'آب مقطر تصفیه‌شده'],
      specifications: [
        { label: 'حجم خالص', value: '۷۵۰ میلی‌لیتر' },
        { label: 'بسته‌بندی', value: 'بطری شیشه‌ای دست‌ساز' },
        { label: 'فصل برداشت', value: 'بهار' },
      ],
      storageInstructions: 'در محیط خنک و دور از نور مستقیم آفتاب نگهداری شود.',
      packagingNote: 'شیشه ضخیم با محافظ حباب‌دار اختصاصی گلابتون.',
      variants: [
        { id: 'v-500', label: '۵۰۰ میلی‌لیتر', price: 170000 },
        { id: 'v-750', label: '۷۵۰ میلی‌لیتر', price: 220000 },
      ],
      popularityScore: 95,
      season: 'بهار',
    },
    {
      id: 'p-3',
      slug: 'aragh-bahar-narenj',
      name: 'عرق بهارنارنج معطر',
      category: 'distillates',
      categoryLabel: 'عرقیجات گیاهی',
      price: 240000,
      weight: '۷۵۰ میلی‌لیتر',
      inStock: true,
      badge: 'تازه رسیده',
      ratingPlaceholder: 4.7,
      reviewCountPlaceholder: 11,
      image: IMAGE_ASSETS.distillates,
      gallery: [IMAGE_ASSETS.distillates, IMAGE_ASSETS.brandStory],
      shortDescription: 'تقطیر‌شده از شکوفه‌های سفید و تازه نارنج؛ مناسب چای، شربت و شیرینی‌پزی خانگی.',
      fullDescription:
        'عرق بهارنارنج با عطر دل‌انگیز شکوفه‌های نارنج بهاری، انتخابی بی‌نظیر برای عطر دادن به چای عصرانه، شربت‌های خنک و حلوای مجلسی است.',
      ingredients: ['شکوفه تازه نارنج', 'آب تصفیه‌شده'],
      specifications: [
        { label: 'حجم خالص', value: '۷۵۰ میلی‌لیتر' },
        { label: 'بسته‌بندی', value: 'بطری شیشه‌ای لوکس' },
      ],
      storageInstructions: 'در جای خنک و تاریک نگهداری شود.',
      packagingNote: 'همراه با کارت معرفی محصول و بسته ایمن.',
      variants: [
        { id: 'v-500', label: '۵۰۰ میلی‌لیتر', price: 185000 },
        { id: 'v-750', label: '۷۵۰ میلی‌لیتر', price: 240000 },
      ],
      popularityScore: 89,
      isNew: true,
      season: 'بهار',
    },
    {
      id: 'p-4',
      slug: 'torshi-makhloot',
      name: 'ترشی مخلوط خانگی',
      category: 'pickles',
      categoryLabel: 'ترشیجات خانگی',
      price: 265000,
      weight: '۹۰۰ گرم',
      inStock: true,
      badge: 'پرفروش',
      ratingPlaceholder: 4.9,
      reviewCountPlaceholder: 24,
      image: IMAGE_ASSETS.pickles,
      gallery: [IMAGE_ASSETS.pickles, IMAGE_ASSETS.heroTable, IMAGE_ASSETS.brandStory],
      shortDescription: 'ترکیب ترد و خوش‌رنگ گل‌کلم، هویج، کرفس، بادمجان و سبزی‌های معطر در سرکه انگور.',
      fullDescription:
        'ترشی مخلوط گلابتون شاپ با سبزیجات تازه و خرد‌شده، سیر محلی، ترخون و گشنیز تازه و ادویه مخصوص ترشی آماده می‌شود تا کنار غذاهای اصیل ایرانی طعمی ماندگار بسازد.',
      ingredients: ['گل‌کلم تازه', 'هویج و کرفس', 'سیر محلی', 'سبزیجات معطر', 'سرکه انگور خانگی', 'ادویه ترشی'],
      specifications: [
        { label: 'وزن خالص', value: '۹۰۰ گرم' },
        { label: 'ظرف', value: 'شیشه دهان‌گشاد با پارچه کتان و ریسمان طبیعی' },
        { label: 'میزان تندی', value: 'ملایم و متعادل' },
      ],
      storageInstructions:
        'در جای خنک و پس از باز شدن در یخچال نگهداری شود. همیشه از قاشق خشک و تمیز استفاده کنید.',
      packagingNote: 'بسته‌بندی پلمب‌شده بدون نشتی با لایه ضربه‌گیر.',
      variants: [
        { id: 'v-650', label: '۶۵۰ گرم', price: 205000 },
        { id: 'v-900', label: '۹۰۰ گرم', price: 265000 },
      ],
      popularityScore: 99,
      season: 'پاییز',
    },
    {
      id: 'p-5',
      slug: 'torshi-liteh',
      name: 'ترشی لیته بادمجان کبابی',
      category: 'pickles',
      categoryLabel: 'ترشیجات خانگی',
      price: 255000,
      weight: '۸۰۰ گرم',
      inStock: true,
      badge: 'پیشنهاد گلابتون',
      ratingPlaceholder: 4.8,
      reviewCountPlaceholder: 16,
      image: IMAGE_ASSETS.pickles,
      gallery: [IMAGE_ASSETS.pickles, IMAGE_ASSETS.brandStory],
      shortDescription: 'لیته جاافتاده بادمجان کبابی با سبزیجات ریزخردشده، نعنا خشک، گلپر و سیر معطر.',
      fullDescription:
        'ترشی لیته خانگی با بادمجان‌های کبابی و بافت نرم و جاافتاده، عطر سبزیجات معطر کوهی و سرکه مرغوب انگور، همراه همیشگی آبگوشت، کتلت و غذاهای سنتی ایرانی.',
      ingredients: ['بادمجان کبابی', 'سبزیجات معطر خردشده', 'سیر و هویج', 'سرکه انگور', 'گلپر و تخم گشنیز'],
      specifications: [
        { label: 'وزن خالص', value: '۸۰۰ گرم' },
        { label: 'بافت', value: 'نرم و یکدست خانگی' },
      ],
      storageInstructions: 'پس از باز شدن درب شیشه حتماً در یخچال نگهداری شود.',
      packagingNote: 'شیشه پلمب‌شده با پوشش کتان سنتی.',
      variants: [
        { id: 'v-550', label: '۵۵۰ گرم', price: 190000 },
        { id: 'v-800', label: '۸۰۰ گرم', price: 255000 },
      ],
      popularityScore: 94,
      season: 'پاییز',
    },
    {
      id: 'p-6',
      slug: 'morabba-beh',
      name: 'مربای به و زعفران خانگی',
      category: 'jams',
      categoryLabel: 'مربا و شیره‌های خانگی',
      price: 295000,
      weight: '۵۰۰ گرم',
      inStock: true,
      badge: 'محبوب',
      ratingPlaceholder: 5.0,
      reviewCountPlaceholder: 21,
      image: IMAGE_ASSETS.jams,
      gallery: [IMAGE_ASSETS.jams, IMAGE_ASSETS.heroTable, IMAGE_ASSETS.brandStory],
      shortDescription: 'مربای به خوش‌رنگ یاقوتی با عطر هل سبز و زعفران دم‌کرده، پخت آرام روی شعله ملایم.',
      fullDescription:
        'به تازه پاییزی با برش‌های یکدست، طی چند ساعت پخت آرام با هل سبز و زعفران به رنگ یاقوتی عمیق می‌رسد. بدون رنگ و اسانس مصنوعی، با شیرینی متعادل برای صبحانه‌های دلنشین.',
      ingredients: ['میوه به تازه', 'شکر سفید', 'زعفران دم‌کرده', 'هل سبز', 'آب لیمو ترش تازه'],
      specifications: [
        { label: 'وزن خالص', value: '۵۰۰ گرم' },
        { label: 'بسته‌بندی', value: 'شیشه شش‌ضلعی با درب طلایی مات' },
      ],
      storageInstructions: 'در محیط خنک و دور از نور نگهداری شود و پس از باز شدن در یخچال قرار گیرد.',
      packagingNote: 'ارسال در جعبه کرافت محافظ.',
      variants: [
        { id: 'v-350', label: '۳۵۰ گرم', price: 225000 },
        { id: 'v-500', label: '۵۰۰ گرم', price: 295000 },
      ],
      popularityScore: 97,
      season: 'پاییز',
    },
    {
      id: 'p-7',
      slug: 'sharbat-gol-mohammadi',
      name: 'شربت گل محمدی و زعفران',
      category: 'syrups',
      categoryLabel: 'شربت‌های سنتی',
      price: 310000,
      weight: '۷۵۰ میلی‌لیتر',
      inStock: true,
      badge: 'پیشنهاد گلابتون',
      ratingPlaceholder: 4.9,
      reviewCountPlaceholder: 19,
      image: IMAGE_ASSETS.syrups,
      gallery: [IMAGE_ASSETS.syrups, IMAGE_ASSETS.heroTable],
      shortDescription: 'شربت غلیظ و مجلسی گل محمدی با عطر گلاب و زعفران؛ آماده رقیق‌سازی با آب خنک.',
      fullDescription:
        'شربت سنتی گل محمدی گلابتون، عصاره‌ای غلیظ از گلاب مرغوب، گلبرگ‌های خشک گل محمدی و زعفران دم‌کرده است که با آب خنک، یخ و تخم‌شربتی نوشیدنی‌ای باوقار برای پذیرایی می‌سازد.',
      ingredients: ['گلاب دوآتیشه', 'گلبرگ گل محمدی', 'زعفران', 'شکر و آب'],
      specifications: [
        { label: 'حجم خالص', value: '۷۵۰ میلی‌لیتر' },
        { label: 'نسبت ترکیب پیشنهادی', value: '۱ قسمت شربت به ۴ قسمت آب خنک' },
      ],
      storageInstructions: 'در جای خنک و پس از باز شدن در یخچال نگهداری شود.',
      packagingNote: 'بطری شیشه‌ای ضخیم با محافظ ضدضربه.',
      variants: [
        { id: 'v-500', label: '۵۰۰ میلی‌لیتر', price: 240000 },
        { id: 'v-750', label: '۷۵۰ میلی‌لیتر', price: 310000 },
      ],
      popularityScore: 96,
      season: 'تابستان',
    },
    {
      id: 'p-8',
      slug: 'rob-anar-khanegi',
      name: 'رب انار ملس خانگی',
      category: 'jams',
      categoryLabel: 'مربا و شیره‌های خانگی',
      price: 345000,
      weight: '۶۰۰ گرم',
      inStock: true,
      badge: 'پرفروش',
      ratingPlaceholder: 4.9,
      reviewCountPlaceholder: 27,
      image: IMAGE_ASSETS.jams,
      gallery: [IMAGE_ASSETS.jams, IMAGE_ASSETS.brandStory],
      shortDescription: 'رب انار غلیظ و اصیل تهیه‌شده از آب انار خالص باغی با طعم ملس متعادل.',
      fullDescription:
        'تهیه‌شده از دانه‌های انار رسیده با روش جوشاندن آرام سنتی؛ غلیظ، براق و خوش‌طعم برای فسنجان، مرغ ناردونی، زیتون‌پرورده و سالادهای ایرانی.',
      ingredients: ['آب انار خالص ۱۰۰ درصد طبیعی'],
      specifications: [
        { label: 'وزن خالص', value: '۶۰۰ گرم' },
        { label: 'طعم', value: 'ملس (ترش و شیرین متعادل)' },
      ],
      storageInstructions: 'در جای خنک و خشک یا یخچال نگهداری شود.',
      packagingNote: 'شیشه پلمب با مهر مومی و بند کتان.',
      variants: [
        { id: 'v-400', label: '۴۰۰ گرم', price: 250000 },
        { id: 'v-600', label: '۶۰۰ گرم', price: 345000 },
      ],
      popularityScore: 100,
      season: 'پاییز',
    },
    {
      id: 'p-9',
      slug: 'somagh-kuhistani',
      name: 'سماق قرمز کوهستانی درجه‌یک',
      category: 'spices',
      categoryLabel: 'ادویه و چاشنی',
      price: 165000,
      weight: '۲۵۰ گرم',
      inStock: true,
      badge: 'تازه رسیده',
      ratingPlaceholder: 4.7,
      reviewCountPlaceholder: 9,
      image: IMAGE_ASSETS.spices,
      gallery: [IMAGE_ASSETS.spices, IMAGE_ASSETS.heroTable],
      shortDescription: 'سماق قرمز ارغوانی با طعم ترش طبیعی و عطر تازه، آسیاب‌شده در بسته‌های تازه.',
      fullDescription:
        'سماق قرمز کوهستانی برداشت فصل، با دانه‌های درشت و رنگ ارغوانی طبیعی که با آسیاب ملایم آماده شده تا روی کباب، غذاهای برنجی و سالاد شیرازی عطر اصیل بپاشد.',
      ingredients: ['سماق قرمز خالص کوهستانی'],
      specifications: [
        { label: 'وزن خالص', value: '۲۵۰ گرم' },
        { label: 'نوع آسیاب', value: 'نیم‌کوب و نرم متعادل' },
      ],
      storageInstructions: 'در ظرف دربسته، جای خشک و دور از رطوبت نگهداری شود.',
      packagingNote: 'بسته‌بندی کاغذی کرافت با لایه محافظ رطوبت.',
      popularityScore: 84,
      isNew: true,
      season: 'تابستان',
    },
    {
      id: 'p-10',
      slug: 'golpar-va-sabzi',
      name: 'چاشنی لیموعمانی و سبزی معطر',
      category: 'spices',
      categoryLabel: 'ادویه و چاشنی',
      price: 155000,
      weight: '۲۰۰ گرم',
      inStock: true,
      ratingPlaceholder: 4.6,
      reviewCountPlaceholder: 7,
      image: IMAGE_ASSETS.spices,
      gallery: [IMAGE_ASSETS.spices],
      shortDescription: 'پودر لیموعمانی شیرازی بدون تلخی و سبزیجات معطر خشک‌شده در سایه.',
      fullDescription:
        'پودر لیمو عمانی پوست‌گیری‌شده و بدون هسته برای جلوگیری از تلخی خورشت‌ها، با رایحه‌ای تازه و دلپذیر مناسب قورمه‌سبزی، قیمه و سوپ‌های خانگی.',
      ingredients: ['پودر لیمو عمانی خالص', 'ترخون و نعنای خشک سایه‌خشک'],
      specifications: [
        { label: 'وزن خالص', value: '۲۰۰ گرم' },
        { label: 'روش خشک‌کردن', value: 'سایه‌خشک سنتی' },
      ],
      storageInstructions: 'در جای خشک و خنک و دور از نور نگهداری شود.',
      packagingNote: 'شیشه ادویه با درب چوبی یا بسته زیپ‌دار کرافت.',
      popularityScore: 80,
      season: 'پاییز',
    },
    {
      id: 'p-11',
      slug: 'ranginak-gerdu',
      name: 'رنگینک گردویی و خرمای خانگی',
      category: 'local-foods',
      categoryLabel: 'خوراکی‌های محلی',
      price: 280000,
      weight: '۵۰۰ گرم',
      inStock: true,
      badge: 'محبوب',
      ratingPlaceholder: 4.9,
      reviewCountPlaceholder: 15,
      image: IMAGE_ASSETS.localFoods,
      gallery: [IMAGE_ASSETS.localFoods, IMAGE_ASSETS.brandStory],
      shortDescription: 'رنگینک دست‌ساز با خرمای مضافتی تازه، مغز گردو، کنجد برشته و پسته سبز.',
      fullDescription:
        'خوراکی سنتی و انرژی‌بخش جنوب ایران که با خرمای نرم، مغز گردوی تازه، آرد تفت‌داده‌شده با کره و عطر دارچین و هل به صورت دست‌ساز آماده می‌شود؛ همراهی گرم برای چای عصرانه زمستانی.',
      ingredients: ['خرمای تازه', 'مغز گردو', 'پسته خردشده', 'کنجد بو‌داده', 'دارچین و هل'],
      specifications: [
        { label: 'وزن خالص', value: '۵۰۰ گرم' },
        { label: 'نوع بسته‌بندی', value: 'جعبه هدیه لایه‌بندی‌شده با کاغذ روغنی' },
      ],
      storageInstructions: 'در جای خنک و در ظرف دربسته تا ۲ هفته قابل نگهداری است.',
      packagingNote: 'چیدمان مرتب در جعبه کادویی گلابتون.',
      popularityScore: 92,
      season: 'زمستان',
    },
    {
      id: 'p-12',
      slug: 'sekanjabin-khiar',
      name: 'شربت سکنجبین عسلی خانگی',
      category: 'syrups',
      categoryLabel: 'شربت‌های سنتی',
      price: 275000,
      weight: '۷۵۰ میلی‌لیتر',
      inStock: false,
      ratingPlaceholder: 4.8,
      reviewCountPlaceholder: 12,
      image: IMAGE_ASSETS.syrups,
      gallery: [IMAGE_ASSETS.syrups],
      shortDescription: 'شربت اصیل سکنجبین تهیه‌شده با عرق نعنای تازه و سرکه انگور طبیعی.',
      fullDescription:
        'سکنجبین سنتی گلابتون با تعادل دقیق شیرینی عسل، طراوت نعنای تازه و سرکه انگور ملایم؛ بهترین نوشیدنی تابستانی کنار کاهو و خیار رنده‌شده.',
      ingredients: ['عرق نعنای تازه', 'عسل طبیعی', 'سرکه انگور خانگی'],
      specifications: [
        { label: 'حجم خالص', value: '۷۵۰ میلی‌لیتر' },
        { label: 'وضعیت فعلی', value: 'در حال آماده‌سازی سری جدید' },
      ],
      storageInstructions: 'در جای خنک و یخچال نگهداری شود.',
      packagingNote: 'بطری شیشه‌ای با درپوش ایمن.',
      popularityScore: 86,
      season: 'تابستان',
    },
  ];

  var SEASONAL_ITEMS = [
    {
      season: 'بهار',
      title: 'محصولات بهاری',
      description: 'نوبرانه‌های معطر بهاری و شکوفه‌های تازه باغی',
      image: IMAGE_ASSETS.heroTable,
      category: 'distillates',
    },
    {
      season: 'تقطیر سنتی',
      title: 'عرقیجات گیاهی',
      description: 'تقطیر آرام نعنا، بیدمشک و بهارنارنج معطر',
      image: IMAGE_ASSETS.distillates,
      category: 'distillates',
    },
    {
      season: 'تابستان',
      title: 'شربت‌های تابستانی',
      description: 'پذیرایی خنک و دلپذیر با گل محمدی و زعفران',
      image: IMAGE_ASSETS.syrups,
      category: 'syrups',
    },
    {
      season: 'پاییز',
      title: 'ترشیجات پاییزی',
      description: 'ترشی مخلوط و لیته خانگی با سبزیجات تازه فصل',
      image: IMAGE_ASSETS.pickles,
      category: 'pickles',
    },
    {
      season: 'زمستان',
      title: 'خوراکی‌های زمستانی',
      description: 'رنگینک گردویی و مزه‌های گرم عصرهای سرد',
      image: IMAGE_ASSETS.localFoods,
      category: 'local-foods',
    },
  ];

  var RECIPES = [
    {
      id: 'r-1',
      title: 'ایده‌هایی برای سرو ترشی‌های خانگی در مهمانی‌های ایرانی',
      category: 'چیدمان و سرو',
      readingTime: '۴ دقیقه مطالعه',
      excerpt:
        'چگونه با ظروف سفالی کوچک، سبزیجات تازه و ترکیب ترشی مخلوط و لیته سفره‌ای چشم‌نواز بچینیم.',
      image: IMAGE_ASSETS.pickles,
      relatedCategory: 'pickles',
      ingredients: [
        'ترشی مخلوط خانگی گلابتون',
        'ترشی لیته بادمجان کبابی',
        'برگ تازه ترخون و جعفری',
        'ظروف کوچک سرامیکی یا سفالی لعاب‌دار',
      ],
      steps: [
        'برای هر نوع ترشی از کاسه‌های کوچک جداگانه استفاده کنید تا عطر و رنگ هر ترشی حفظ شود.',
        'پیش از چیدن روی میز، کنار لبه‌های ظرف چند برگ تازه ترخون یا جعفری بگذارید.',
        'در کنار غذاهای گوشتی و آبگوشت، ترشی لیته و در کنار پلوهای مخلوط، ترشی مخلوط ترد سرو کنید.',
      ],
    },
    {
      id: 'r-2',
      title: 'شربت‌های سنتی و نوشیدنی‌های خنک با عطر گلاب و بیدمشک',
      category: 'نوشیدنی و پذیرایی',
      readingTime: '۵ دقیقه مطالعه',
      excerpt:
        'طرز تهیه دو شربت اصیل تابستانی با شربت گل محمدی، عرق بیدمشک و تخم‌شربتی خیس‌خورده.',
      image: IMAGE_ASSETS.syrups,
      relatedCategory: 'syrups',
      ingredients: [
        'شربت گل محمدی و زعفران گلابتون (۳ قاشق غذاخوری)',
        'عرق بیدمشک (۲ قاشق غذاخوری)',
        'تخم‌شربتی شسته‌شده (۱ قاشق چای‌خوری)',
        'آب خنک، یخ و گلبرگ خشک گل محمدی',
      ],
      steps: [
        'تخم‌شربتی را از نیم ساعت قبل در نصف لیوان آب خنک بخیسانید.',
        'شربت گل محمدی و عرق بیدمشک را در پارچ شیشه‌ای بریزید و آب خنک اضافه کنید.',
        'پیش از سرو، یخ و چند گلبرگ گل محمدی روی لیوان قرار دهید.',
      ],
    },
    {
      id: 'r-3',
      title: 'چاشنی‌های مناسب غذاهای اصیل ایرانی؛ از سماق تا رب انار',
      category: 'آشپزی خانگی',
      readingTime: '۳ دقیقه مطالعه',
      excerpt:
        'آشنایی با کاربرد ادویه‌ها و چاشنی‌های طبیعی برای عمق بخشیدن به طعم خورشت‌ها و کباب‌ها.',
      image: IMAGE_ASSETS.spices,
      relatedCategory: 'spices',
      ingredients: [
        'سماق قرمز کوهستانی',
        'پودر لیمو عمانی بدون هسته',
        'رب انار ملس خانگی گلابتون',
      ],
      steps: [
        'پودر لیمو عمانی را در ۱۵ دقیقه پایانی پخت خورشت اضافه کنید تا عطر تازه‌اش حفظ شود.',
        'برای ملس کردن مرغ و خورشت فسنجان، از رب انار خالص با حرارت ملایم استفاده کنید.',
        'سماق تازه را درست پیش از سرو روی غذا بپاشید تا رنگ و طعم ترش آن ماندگار بماند.',
      ],
    },
    {
      id: 'r-4',
      title: 'پیشنهادهایی برای یک میز صبحانه رنگارنگ و خاطره‌انگیز',
      category: 'سبک زندگی و سفره',
      readingTime: '۴ دقیقه مطالعه',
      excerpt:
        'ترکیب مربای به زعفرانی، نان سنگک تازه، پنیر محلی و چای بهارنارنج برای صبح‌های آرام.',
      image: IMAGE_ASSETS.jams,
      relatedCategory: 'jams',
      ingredients: [
        'مربای به و زعفران خانگی',
        'عرق بهارنارنج (چند قطره در قوری چای)',
        'مغز گردوی تازه و کره محلی',
      ],
      steps: [
        'هنگام دم کشیدن چای سیاه ایرانی، یک قاشق چای‌خوری عرق بهارنارنج به قوری بیفزایید.',
        'مربای به را در پیاله‌ای کوچک در مرکز سینی چای بگذارید و کنار آن گردو و نان تازه قرار دهید.',
      ],
    },
  ];

  var SAMPLE_REVIEWS = [
    {
      id: 'rev-1',
      author: 'نام مشتری (نمونه قابل ویرایش)',
      city: 'تهران',
      date: '۱۴۰۵/۰۸/۱۲',
      rating: 5,
      purchasedProduct: 'ترشی مخلوط خانگی',
      comment:
        'متن دیدگاه قابل ویرایش درباره طعم خانگی، عطر سبزیجات معطر و بسته‌بندی پارچه‌ای کتان.',
    },
    {
      id: 'rev-2',
      author: 'نام مشتری (نمونه قابل ویرایش)',
      city: 'شیراز',
      date: '۱۴۰۵/۰۸/۰۴',
      rating: 5,
      purchasedProduct: 'عرق بیدمشک بهاری',
      comment: 'متن دیدگاه قابل ویرایش درباره عطر اصیل عرقیجات و ارسال ایمن بطری‌های شیشه‌ای.',
    },
    {
      id: 'rev-3',
      author: 'نام مشتری (نمونه قابل ویرایش)',
      city: 'اصفهان',
      date: '۱۴۰۵/۰۷/۲۵',
      rating: 5,
      purchasedProduct: 'مربای به و زعفران خانگی',
      comment:
        'متن دیدگاه قابل ویرایش درباره کیفیت میوه، رنگ یاقوتی و شیرینی متعادل مربای خانگی.',
    },
  ];

  var INSTAGRAM_TILES = [
    { id: 'ig-1', image: IMAGE_ASSETS.heroTable, caption: 'سفره صبحانه و عرقیجات تازه' },
    { id: 'ig-2', image: IMAGE_ASSETS.pickles, caption: 'بسته‌بندی کتان ترشی مخلوط' },
    { id: 'ig-3', image: IMAGE_ASSETS.jams, caption: 'مربای به یاقوتی و رب انار' },
    { id: 'ig-4', image: IMAGE_ASSETS.distillates, caption: 'تقطیر سنتی نعنا و گلاب' },
    { id: 'ig-5', image: IMAGE_ASSETS.spices, caption: 'سماق و ادویه‌های دست‌چین' },
    { id: 'ig-6', image: IMAGE_ASSETS.brandStory, caption: 'پشت صحنه آشپزخانه گلابتون' },
  ];

  var FAQ_ITEMS = [
    {
      id: 'faq-1',
      group: 'سفارش و خرید',
      question: 'چطور در گلابتون شاپ سفارش ثبت کنم؟',
      answer:
        'متن راهنمای قابل ویرایش: کافی است محصولات مورد نظر خود را به سبد خرید اضافه کنید، وارد صفحه تسویه‌حساب شوید و پس از وارد کردن نشانی و انتخاب روش ارسال، سفارش خود را نهایی کنید.',
    },
    {
      id: 'faq-2',
      group: 'ارسال و بسته‌بندی',
      question: 'هزینه ارسال چگونه محاسبه می‌شود؟',
      answer:
        'متن قابل ویرایش: هزینه ارسال بر اساس روش انتخابی و شهر مقصد محاسبه می‌شود. برای سفارش‌های بالای ۱٬۵۰۰٬۰۰۰ تومان، ارسال در حال حاضر به صورت رایگان در نظر گرفته شده است.',
    },
    {
      id: 'faq-3',
      group: 'ارسال و بسته‌بندی',
      question: 'بطری‌ها و شیشه‌ها در مسیر ارسال چطور محافظت می‌شوند؟',
      answer:
        'تمامی بطری‌های عرقیجات و شیشه‌های ترشی و مربا در بسته‌بندی‌های دولایه ضربه‌گیر و جعبه‌های مقاوم قرار می‌گیرند تا بدون آسیب به دست شما برسند.',
    },
    {
      id: 'faq-4',
      group: 'سفارش و خرید',
      question: 'چطور وضعیت سفارش خود را پیگیری کنم؟',
      answer:
        'پس از ثبت سفارش، یک کد پیگیری اختصاصی دریافت می‌کنید و می‌توانید از بخش «حساب کاربری > تاریخچه سفارش‌ها» وضعیت آماده‌سازی و ارسال مرسوله خود را مشاهده کنید.',
    },
    {
      id: 'faq-5',
      group: 'نگهداری محصولات',
      question: 'شرایط نگهداری ترشیجات، مرباها و عرقیجات چیست؟',
      answer:
        'تمامی محصولات پیش از باز شدن در جای خشک، خنک و دور از نور مستقیم آفتاب نگهداری شوند. پس از باز کردن درب شیشه‌های ترشی و مربا، حتماً در یخچال قرار دهید و از قاشق تمیز و خشک استفاده کنید.',
    },
    {
      id: 'faq-6',
      group: 'پشتیبانی',
      question: 'چطور می‌توانم با پشتیبانی گلابتون شاپ ارتباط بگیرم؟',
      answer:
        'از طریق صفحه «تماس با ما»، شماره تماس درج‌شده در فوتر سایت یا ارسال پیام مستقیم می‌توانید با تیم پشتیبانی در ارتباط باشید.',
    },
  ];

  var PROVINCES = [
    'تهران',
    'اصفهان',
    'فارس',
    'خراسان رضوی',
    'آذربایجان شرقی',
    'مازندران',
    'گیلان',
    'البرز',
    'قم',
    'یزد',
    'کرمان',
    'خوزستان',
  ];

  var INITIAL_ADDRESSES = [
    {
      id: 'addr-1',
      title: 'نشانی پیش‌فرض (قابل ویرایش)',
      recipient: 'نام گیرنده قابل ویرایش',
      mobile: '09120000000',
      province: 'تهران',
      city: 'تهران',
      address: 'نشانی نمونه قابل ویرایش',
      postalCode: '1415512345',
    },
  ];

  // =========================================================================
  // Helpers & Icons
  // =========================================================================
  function loadStorage(key, fallback) {
    try {
      var raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_err) {
      return fallback;
    }
  }

  function saveStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (_err) {
      // Ignore storage quota errors
    }
  }

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function toPersianDigits(input) {
    return String(input).replace(/\d/g, function (d) {
      return PERSIAN_DIGITS[Number(d)] || d;
    });
  }

  function formatToman(amount) {
    var formatted = new Intl.NumberFormat('en-US').format(Math.max(0, Math.round(amount)));
    return toPersianDigits(formatted);
  }

  function iconSvg(name, size) {
    var px = size || 18;
    var paths = {
      menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
      x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
      chevronDown: '<path d="m6 9 6 6 6-6"/>',
      search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
      user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
      heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
      bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
      home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
      grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
      arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
      star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      check: '<path d="M20 6 9 17l-5-5"/>',
      checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
      plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
      minus: '<path d="M5 12h14"/>',
      trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
      sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
      zoomIn: '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',
      truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
      shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
      clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      sparkles: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
      flower: '<circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/>',
      heartHand: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
      packageCheck: '<path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/>',
      instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
      mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
      mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
      tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
      package: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
      settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
      logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    };
    return (
      '<svg class="icon" width="' +
      px +
      '" height="' +
      px +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (paths[name] || '') +
      '</svg>'
    );
  }

  function starSvg(px) {
    return (
      '<svg class="icon" width="' +
      (px || 12) +
      '" height="' +
      (px || 12) +
      '" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
    );
  }

  function officialLogoHtml(size) {
    return (
      '<div class="official-logo official-logo--' +
      (size || 'md') +
      '">' +
      '<img src="' +
      OFFICIAL_LOGO_URL +
      '" alt="لوگوی رسمی گلابتون شاپ" />' +
      '</div>'
    );
  }

  function persianDividerHtml(light) {
    var stroke = light ? '#D5A52E' : '#B88B37';
    return (
      '<div class="persian-divider' +
      (light ? ' persian-divider--light' : '') +
      '" aria-hidden="true">' +
      '<div class="persian-divider__line"></div>' +
      '<svg width="42" height="20" viewBox="0 0 42 20" fill="none">' +
      '<path d="M21 2C24.5 6.5 29 8.5 39 10C29 11.5 24.5 13.5 21 18C17.5 13.5 13 11.5 3 10C13 8.5 17.5 6.5 21 2Z" stroke="' +
      stroke +
      '" stroke-width="1.2" />' +
      '<circle cx="21" cy="10" r="2.6" fill="#B51F2A" stroke="' +
      stroke +
      '" stroke-width="0.9" />' +
      '</svg>' +
      '<div class="persian-divider__line"></div>' +
      '</div>'
    );
  }

  function cornerOrnamentHtml(pos) {
    return (
      '<svg viewBox="0 0 48 48" fill="none" aria-hidden="true" class="corner-ornament ' +
      (pos === 'top-left' ? 'corner-ornament--top-left' : '') +
      '">' +
      '<path d="M44 4H12C7.58172 4 4 7.58172 4 12V44" stroke="#D5A52E" stroke-width="1.4" opacity="0.7" />' +
      '<path d="M36 9H15C11.6863 9 9 11.6863 9 15V36" stroke="#176D79" stroke-width="1" opacity="0.55" />' +
      '<circle cx="10" cy="10" r="2.5" fill="#B51F2A" stroke="#D5A52E" stroke-width="0.9" />' +
      '</svg>'
    );
  }

  function brandImgHtml(src, alt, eager) {
    return (
      '<img src="' +
      escapeHtml(src) +
      '" alt="' +
      escapeHtml(alt) +
      '" loading="' +
      (eager ? 'eager' : 'lazy') +
      '" class="brand-img" />'
    );
  }

  // =========================================================================
  // Application State
  // =========================================================================
  var state = {
    page: 'home',
    activeCategory: 'all',
    selectedProductId: PRODUCTS[0].id,
    recentlyViewedIds: [PRODUCTS[0].id, PRODUCTS[3].id],

    cart: loadStorage(STORAGE_KEYS.cart, []),
    wishlist: loadStorage(STORAGE_KEYS.wishlist, ['p-1', 'p-6']),
    orders: loadStorage(STORAGE_KEYS.orders, []),
    addresses: loadStorage(STORAGE_KEYS.addresses, INITIAL_ADDRESSES),
    profile: loadStorage(STORAGE_KEYS.profile, {
      isAuthenticated: false,
      fullName: 'مشتری گرامی گلابتون',
      mobile: '09120000000',
      email: 'hello@golabtoonshop.example',
    }),

    showAnnouncement: true,
    announcementIdx: 0,
    megaOpen: false,
    mobileMenuOpen: false,
    searchOpen: false,
    searchQuery: '',
    recentSearches: ['عرق نعنا', 'ترشی مخلوط', 'رب انار', 'مربای به'],
    activeRecipeId: null,
    toastMessage: '',
    justAddedCardId: null,

    // Home newsletter
    newsletterEmail: '',
    newsletterDone: false,
    newsletterError: '',

    // Shop filters
    shopSearch: '',
    shopMaxPrice: 400000,
    shopOnlyAvailable: false,
    shopSort: 'popular',
    shopVisibleCount: 8,
    mobileFiltersOpen: false,

    // PDP state
    pdpImageIdx: 0,
    pdpZoomed: false,
    pdpVariantId: null,
    pdpQty: 1,
    pdpTab: 'intro',
    pdpJustAdded: false,
    pdpReviews: SAMPLE_REVIEWS.slice(),
    pdpReviewSaved: false,

    // Cart & Checkout
    discountCode: '',
    discountMsg: '',
    checkout: {
      fullName: '',
      mobile: '',
      province: 'تهران',
      city: 'تهران',
      address: '',
      postalCode: '',
      notes: '',
      deliveryMethod: 'پست پیشتاز با بسته‌بندی ضدضربه',
      paymentMethod: 'پرداخت در محل (ویژه پیش‌نمایش)',
      errors: {},
      confirmedOrder: null,
    },

    // Account
    authMode: 'login',
    accountTab: 'orders',
    expandedOrderId: null,
    accountSavedNotice: '',
    showAddressForm: false,

    // Contact & FAQ
    contactSubmitted: false,
    faqOpenId: FAQ_ITEMS[0].id,
  };

  function initCheckoutDefaults() {
    var addr = state.addresses[0];
    if (addr) {
      state.checkout.fullName = addr.recipient || '';
      state.checkout.mobile = addr.mobile || '';
      state.checkout.province = addr.province || 'تهران';
      state.checkout.city = addr.city || 'تهران';
      state.checkout.address = addr.address || '';
      state.checkout.postalCode = addr.postalCode || '';
    }
    if (state.orders.length > 0) {
      state.expandedOrderId = state.orders[0].id;
    }
  }

  function parseHashRoute() {
    var raw = window.location.hash.replace(/^#\/?/, '');
    var parts = raw.split('/').filter(Boolean);
    if (parts[0] === 'product' && parts[1]) {
      var found = PRODUCTS.find(function (p) {
        return p.slug === parts[1] || p.id === parts[1];
      });
      if (found) {
        state.page = 'product';
        state.activeCategory = found.category;
        selectProductState(found.id, false);
        return;
      }
    }
    if (parts[0] === 'shop') {
      state.page = 'shop';
      state.activeCategory = parts[1] || 'all';
      return;
    }
    if (
      parts[0] === 'cart' ||
      parts[0] === 'checkout' ||
      parts[0] === 'account' ||
      parts[0] === 'about' ||
      parts[0] === 'contact' ||
      parts[0] === 'faq'
    ) {
      state.page = parts[0];
      return;
    }
    state.page = 'home';
  }

  function selectProductState(productId, updateHash) {
    var product = PRODUCTS.find(function (p) {
      return p.id === productId;
    });
    if (!product) return;
    state.selectedProductId = product.id;
    state.pdpImageIdx = 0;
    state.pdpZoomed = false;
    state.pdpQty = 1;
    state.pdpTab = 'intro';
    state.pdpJustAdded = false;
    state.pdpReviewSaved = false;
    state.pdpVariantId =
      product.variants && product.variants.length
        ? product.variants[product.variants.length - 1].id
        : null;

    state.recentlyViewedIds = [product.id]
      .concat(
        state.recentlyViewedIds.filter(function (id) {
          return id !== product.id;
        })
      )
      .slice(0, 6);

    state.page = 'product';
    if (updateHash !== false) {
      window.location.hash = '/product/' + product.slug;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function navigateTo(page, category) {
    if (category) {
      state.activeCategory = category;
    } else if (page !== 'shop') {
      state.activeCategory = 'all';
    }
    state.page = page;
    state.megaOpen = false;
    state.mobileMenuOpen = false;
    if (page === 'checkout') {
      state.checkout.confirmedOrder = null;
      state.checkout.errors = {};
    }

    if (page === 'home') {
      window.location.hash = '/';
    } else if (page === 'shop') {
      window.location.hash = state.activeCategory === 'all' ? '/shop' : '/shop/' + state.activeCategory;
    } else {
      window.location.hash = '/' + page;
    }
    renderAll();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var toastTimer = null;
  function showToast(msg) {
    state.toastMessage = msg;
    renderToast();
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      state.toastMessage = '';
      renderToast();
    }, 2600);
  }

  function addToCart(productId, qty, variantId, variantLabel, customPrice) {
    var product = PRODUCTS.find(function (p) {
      return p.id === productId;
    });
    if (!product || !product.inStock) return;

    var defaultVariant =
      product.variants && product.variants.length
        ? product.variants[product.variants.length - 1]
        : null;
    var effVariantId = variantId || (defaultVariant ? defaultVariant.id : 'default');
    var effLabel = variantLabel || (defaultVariant ? defaultVariant.label : product.weight);
    var effPrice = typeof customPrice === 'number' ? customPrice : defaultVariant ? defaultVariant.price : product.price;
    var addQty = qty || 1;

    var existing = state.cart.find(function (item) {
      return item.productId === product.id && item.variantId === effVariantId;
    });
    if (existing) {
      existing.quantity += addQty;
    } else {
      state.cart.push({
        productId: product.id,
        variantId: effVariantId,
        variantLabel: effLabel,
        name: product.name,
        categoryLabel: product.categoryLabel,
        price: effPrice,
        image: product.image,
        quantity: addQty,
      });
    }
    saveStorage(STORAGE_KEYS.cart, state.cart);
    showToast('«' + product.name + '» به سبد خرید اضافه شد.');
  }

  function toggleWishlist(productId) {
    var idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast('از لیست علاقه‌مندی‌ها حذف شد.');
    } else {
      state.wishlist.unshift(productId);
      showToast('به لیست علاقه‌مندی‌ها اضافه شد.');
    }
    saveStorage(STORAGE_KEYS.wishlist, state.wishlist);
  }

  // =========================================================================
  // Product Card Renderer
  // =========================================================================
  function renderProductCard(product) {
    var isWishlisted = state.wishlist.indexOf(product.id) > -1;
    var isJustAdded = state.justAddedCardId === product.id;

    var badgeHtml = '';
    if (!product.inStock) {
      badgeHtml = '<span class="product-badge product-badge--dark">ناموجود موقت</span>';
    } else if (product.badge) {
      badgeHtml =
        '<span class="product-badge product-badge--crimson">' +
        escapeHtml(product.badge) +
        '</span>';
    }

    return (
      '<article class="product-card">' +
      '<div class="product-card__media" data-action="select-product" data-id="' +
      product.id +
      '" role="button" tabindex="0">' +
      brandImgHtml(product.image, product.name, false) +
      '<button type="button" class="wishlist-btn' +
      (isWishlisted ? ' is-active' : '') +
      '" data-action="toggle-wishlist" data-id="' +
      product.id +
      '" aria-label="' +
      (isWishlisted ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها') +
      '">' +
      iconSvg('heart', 16) +
      '</button>' +
      badgeHtml +
      '</div>' +
      '<div class="product-card__body">' +
      '<div>' +
      '<div class="product-card__meta">' +
      '<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' +
      escapeHtml(product.categoryLabel) +
      ' · ' +
      escapeHtml(product.weight) +
      '</span>' +
      '<span title="امتیاز نمونه قابل ویرایش" class="tabular-nums" style="display:inline-flex;align-items:center;gap:4px;color:#60412E;flex-shrink:0;">' +
      '<span style="color:#D5A52E;display:inline-flex;">' +
      starSvg(12) +
      '</span>' +
      '<span>' +
      toPersianDigits(product.ratingPlaceholder) +
      '</span>' +
      '</span>' +
      '</div>' +
      '<h3 class="product-card__title" data-action="select-product" data-id="' +
      product.id +
      '">' +
      escapeHtml(product.name) +
      '</h3>' +
      '<button type="button" class="product-card__details-link" data-action="select-product" data-id="' +
      product.id +
      '">مشاهده جزئیات محصول ←</button>' +
      '</div>' +
      '<div class="product-card__footer">' +
      '<div style="display:flex;align-items:baseline;gap:4px;">' +
      '<span class="tabular-nums" style="font-size:1rem;font-weight:700;color:#173D30;">' +
      formatToman(product.price) +
      '</span>' +
      '<span style="font-size:11px;color:rgba(96,65,46,0.8);">تومان</span>' +
      '</div>' +
      '<button type="button" class="product-card__add-btn" ' +
      (!product.inStock ? 'disabled ' : '') +
      'data-action="quick-add" data-id="' +
      product.id +
      '" style="' +
      (isJustAdded ? 'background-color:#286044;border-color:#D5A52E;' : '') +
      '">' +
      (isJustAdded
        ? iconSvg('check', 14) + '<span>افزوده شد</span>'
        : iconSvg('bag', 14) +
          '<span>' +
          (product.inStock ? 'افزودن' : 'ناموجود') +
          '</span>') +
      '</button>' +
      '</div>' +
      '</div>' +
      '</article>'
    );
  }

  // =========================================================================
  // Header, Announcement Bar, Footer, Mobile Nav
  // =========================================================================
  function renderAnnouncement() {
    var root = document.getElementById('app-announcement');
    if (!root) return;
    if (!state.showAnnouncement) {
      root.innerHTML = '';
      return;
    }
    root.innerHTML =
      '<div class="announcement-bar">' +
      '<div class="announcement-bar__spacer"></div>' +
      '<p class="announcement-bar__text">' +
      escapeHtml(ANNOUNCEMENTS[state.announcementIdx]) +
      '</p>' +
      '<button type="button" class="announcement-bar__close" data-action="close-announcement" aria-label="بستن نوار اعلان">' +
      iconSvg('x', 14) +
      '</button>' +
      '</div>';
  }

  function renderHeader() {
    var root = document.getElementById('app-header');
    if (!root) return;

    var cartCount = state.cart.reduce(function (sum, i) {
      return sum + i.quantity;
    }, 0);
    var wishlistCount = state.wishlist.length;

    var megaCatHtml = CATEGORIES.map(function (cat) {
      return (
        '<button type="button" class="mega-cat-item" data-action="nav" data-page="shop" data-category="' +
        cat.slug +
        '">' +
        '<div class="mega-cat-item__thumb">' +
        brandImgHtml(cat.image, cat.title, false) +
        '</div>' +
        '<div style="min-width:0;">' +
        '<p class="mega-cat-item__name">' +
        escapeHtml(cat.title) +
        '</p>' +
        '<p class="mega-cat-item__sub">' +
        escapeHtml(cat.seasonTag) +
        '</p>' +
        '</div>' +
        '</button>'
      );
    }).join('');

    var megaFeaturedHtml = PRODUCTS.slice(0, 3)
      .map(function (p) {
        return (
          '<button type="button" class="mega-featured-item" data-action="select-product" data-id="' +
          p.id +
          '">' +
          '<div style="display:flex;align-items:center;gap:0.75rem;min-width:0;">' +
          '<div class="mega-featured-item__thumb">' +
          brandImgHtml(p.image, p.name, false) +
          '</div>' +
          '<div style="min-width:0;">' +
          '<p style="font-size:0.875rem;font-weight:600;color:#173D30;">' +
          escapeHtml(p.name) +
          '</p>' +
          '<p style="font-size:0.75rem;color:rgba(96,65,46,0.75);">' +
          escapeHtml(p.weight) +
          '</p>' +
          '</div>' +
          '</div>' +
          '<span class="tabular-nums" style="font-size:0.75rem;font-weight:700;color:#173D30;white-space:nowrap;">' +
          formatToman(p.price) +
          ' تومان</span>' +
          '</button>'
        );
      })
      .join('');

    root.innerHTML =
      '<header class="site-header" id="site-header">' +
      '<div class="header-container site-header__inner">' +
      '<div class="header-right">' +
      '<button type="button" class="mobile-menu-btn" data-action="open-mobile-menu" aria-label="باز کردن منوی موبایل">' +
      iconSvg('menu', 20) +
      '</button>' +
      '<nav class="desktop-nav" aria-label="منوی اصلی">' +
      '<button type="button" class="nav-link' +
      (state.page === 'home' ? ' nav-link--active' : '') +
      '" data-action="nav" data-page="home">خانه</button>' +
      '<button type="button" class="nav-link' +
      (state.page === 'shop' && state.activeCategory === 'all' ? ' nav-link--active' : '') +
      '" data-action="nav" data-page="shop" data-category="all" data-mega-trigger="true">' +
      '<span>فروشگاه</span>' +
      iconSvg('chevronDown', 14) +
      '</button>' +
      '<button type="button" class="nav-link' +
      (state.page === 'shop' && state.activeCategory === 'distillates' ? ' nav-link--active' : '') +
      '" data-action="nav" data-page="shop" data-category="distillates">عرقیجات</button>' +
      '<button type="button" class="nav-link' +
      (state.page === 'shop' && state.activeCategory === 'pickles' ? ' nav-link--active' : '') +
      '" data-action="nav" data-page="shop" data-category="pickles">ترشیجات</button>' +
      '<button type="button" class="nav-link' +
      (state.page === 'shop' && state.activeCategory === 'jams' ? ' nav-link--active' : '') +
      '" data-action="nav" data-page="shop" data-category="jams">مربا و فرآورده‌ها</button>' +
      '<button type="button" class="nav-link nav-link--xl-only' +
      (state.page === 'shop' && state.activeCategory === 'local-foods' ? ' nav-link--active' : '') +
      '" data-action="nav" data-page="shop" data-category="local-foods">خوراکی‌های خانگی</button>' +
      '<button type="button" class="nav-link' +
      (state.page === 'about' ? ' nav-link--active' : '') +
      '" data-action="nav" data-page="about">درباره ما</button>' +
      '</nav>' +
      '</div>' +
      '<button type="button" class="brand-center-btn" data-action="nav" data-page="home">' +
      officialLogoHtml('sm') +
      '<span class="brand-center-text">' +
      '<span class="brand-center-title">گلابتون شاپ</span>' +
      '<span class="brand-center-slogan">عطر اصالت، طعم خونه</span>' +
      '</span>' +
      '</button>' +
      '<div class="header-actions">' +
      '<button type="button" class="header-icon-btn" data-action="open-search" aria-label="جستجوی محصولات">' +
      iconSvg('search', 18) +
      '</button>' +
      '<button type="button" class="header-icon-btn header-icon-btn--desktop" data-action="nav" data-page="account" aria-label="حساب کاربری">' +
      iconSvg('user', 18) +
      '</button>' +
      '<button type="button" class="header-icon-btn header-icon-btn--desktop" data-action="nav" data-page="account" data-account-tab="wishlist" aria-label="علاقه‌مندی‌ها">' +
      iconSvg('heart', 18) +
      (wishlistCount > 0
        ? '<span class="badge-count tabular-nums">' + toPersianDigits(wishlistCount) + '</span>'
        : '') +
      '</button>' +
      '<button type="button" class="header-cart-btn" data-action="nav" data-page="cart" aria-label="سبد خرید">' +
      iconSvg('bag', 16) +
      '<span class="header-cart-btn__label">سبد خرید</span>' +
      '<span class="header-cart-btn__count tabular-nums">' +
      toPersianDigits(cartCount) +
      '</span>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '<div id="mega-menu" class="mega-menu' +
      (state.megaOpen ? ' is-open' : '') +
      '">' +
      '<div class="container mega-menu__grid">' +
      '<div class="mega-menu__cats">' +
      '<div class="mega-menu__head">' +
      '<h3 class="mega-menu__title">دسته‌بندی طعم‌های گلابتون</h3>' +
      '<button type="button" class="mega-menu__all-link" data-action="nav" data-page="shop" data-category="all">مشاهده همه محصولات</button>' +
      '</div>' +
      '<div class="mega-menu__cat-grid">' +
      megaCatHtml +
      '</div>' +
      '</div>' +
      '<div class="mega-menu__featured">' +
      '<div class="mega-menu__head">' +
      '<h3 class="mega-menu__title">برگزیده‌های پرطرفدار</h3>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:0.75rem;">' +
      megaFeaturedHtml +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</header>';

    var headerEl = document.getElementById('site-header');
    var megaTrigger = headerEl ? headerEl.querySelector('[data-mega-trigger]') : null;
    if (megaTrigger && headerEl) {
      megaTrigger.addEventListener('mouseenter', function () {
        if (!state.megaOpen) {
          state.megaOpen = true;
          var mm = document.getElementById('mega-menu');
          if (mm) mm.classList.add('is-open');
        }
      });
      headerEl.addEventListener('mouseleave', function () {
        if (state.megaOpen) {
          state.megaOpen = false;
          var mm = document.getElementById('mega-menu');
          if (mm) mm.classList.remove('is-open');
        }
      });
    }
  }

  function renderMobileNav() {
    var root = document.getElementById('app-mobile-nav');
    if (!root) return;

    var cartCount = state.cart.reduce(function (sum, i) {
      return sum + i.quantity;
    }, 0);

    root.innerHTML =
      '<nav class="mobile-bottom-nav" aria-label="ناوبری سریع موبایل">' +
      '<button type="button" class="mobile-bottom-nav__btn' +
      (state.page === 'home' ? ' is-active' : '') +
      '" data-action="nav" data-page="home">' +
      iconSvg('home', 16) +
      '<span>خانه</span>' +
      '</button>' +
      '<button type="button" class="mobile-bottom-nav__btn' +
      (state.page === 'shop' ? ' is-active' : '') +
      '" data-action="nav" data-page="shop" data-category="all">' +
      iconSvg('grid', 16) +
      '<span>دسته‌بندی</span>' +
      '</button>' +
      '<button type="button" class="mobile-bottom-nav__btn" data-action="open-search">' +
      iconSvg('search', 16) +
      '<span>جستجو</span>' +
      '</button>' +
      '<button type="button" class="mobile-bottom-nav__btn' +
      (state.page === 'account' ? ' is-active' : '') +
      '" data-action="nav" data-page="account" data-account-tab="wishlist">' +
      iconSvg('heart', 16) +
      '<span>علاقه‌مندیها</span>' +
      '</button>' +
      '<button type="button" class="mobile-bottom-nav__btn' +
      (state.page === 'cart' || state.page === 'checkout' ? ' is-active' : '') +
      '" data-action="nav" data-page="cart">' +
      '<div class="mobile-bottom-cart-wrap">' +
      iconSvg('bag', 16) +
      (cartCount > 0
        ? '<span class="mobile-bottom-badge tabular-nums">' + toPersianDigits(cartCount) + '</span>'
        : '') +
      '</div>' +
      '<span>سبد خرید</span>' +
      '</button>' +
      '</nav>';
  }

  function renderFooter() {
    var root = document.getElementById('app-footer');
    if (!root) return;

    var catLinks = CATEGORIES.map(function (cat) {
      return (
        '<li style="margin-bottom:0.625rem;">' +
        '<button type="button" data-action="nav" data-page="shop" data-category="' +
        cat.slug +
        '" style="font-size:0.875rem;color:rgba(230,210,165,0.9);">' +
        escapeHtml(cat.title) +
        '</button>' +
        '</li>'
      );
    }).join('');

    root.innerHTML =
      '<footer class="site-footer bg-royal-persian">' +
      '<div class="container">' +
      '<div class="footer-grid">' +
      '<div class="footer-col-4" style="display:flex;flex-direction:column;gap:1.25rem;">' +
      '<div style="display:flex;align-items:center;gap:1rem;">' +
      officialLogoHtml('lg') +
      '<div style="display:flex;flex-direction:column;gap:0.25rem;">' +
      '<p class="font-display-fa" style="font-size:1.5rem;color:#F4E8D0;">گلابتون شاپ</p>' +
      '<p style="font-size:0.75rem;font-weight:600;color:#D5A52E;">گلابتون شاپ؛ عطر اصالت، طعم خونه</p>' +
      '<p class="font-latin-serif" style="font-size:11px;letter-spacing:0.22em;color:rgba(230,210,165,0.8);text-transform:uppercase;">GOLABTOON SHOP</p>' +
      '</div>' +
      '</div>' +
      '<p style="font-size:0.875rem;color:rgba(230,210,165,0.9);line-height:1.75;max-width:24rem;">گلابتون شاپ؛ همراه سفره‌های گرم و طعم‌های اصیل ایرانی. مجموعه‌ای منتخب از عرقیجات گیاهی، ترشیجات خانگی، مربا و خوراکی‌های سنتی.</p>' +
      '<div style="display:flex;align-items:center;gap:0.75rem;">' +
      '<button type="button" class="footer-social-btn" data-action="nav" data-page="about" aria-label="صفحه اینستاگرام گلابتون شاپ">' +
      iconSvg('instagram', 16) +
      '</button>' +
      '<button type="button" class="footer-social-btn" data-action="nav" data-page="contact" aria-label="ارسال ایمیل">' +
      iconSvg('mail', 16) +
      '</button>' +
      '</div>' +
      '</div>' +
      '<div class="footer-col-2">' +
      '<h3 style="font-size:0.875rem;font-weight:700;color:#D5A52E;margin-bottom:0.875rem;">دسترسی سریع</h3>' +
      '<ul style="list-style:none;display:flex;flex-direction:column;gap:0.625rem;font-size:0.875rem;color:rgba(230,210,165,0.9);">' +
      '<li><button type="button" data-action="nav" data-page="home">صفحه اصلی</button></li>' +
      '<li><button type="button" data-action="nav" data-page="shop" data-category="all">فروشگاه</button></li>' +
      '<li><button type="button" data-action="nav" data-page="about">درباره ما</button></li>' +
      '<li><button type="button" data-action="nav" data-page="contact">تماس با ما</button></li>' +
      '<li><button type="button" data-action="nav" data-page="faq">سوالات متداول</button></li>' +
      '</ul>' +
      '</div>' +
      '<div class="footer-col-3">' +
      '<h3 style="font-size:0.875rem;font-weight:700;color:#D5A52E;margin-bottom:0.875rem;">دسته‌بندی محصولات</h3>' +
      '<ul style="list-style:none;">' +
      catLinks +
      '</ul>' +
      '</div>' +
      '<div class="footer-col-3">' +
      '<h3 style="font-size:0.875rem;font-weight:700;color:#D5A52E;margin-bottom:0.875rem;">ارتباط با ما</h3>' +
      '<ul style="list-style:none;display:flex;flex-direction:column;gap:0.75rem;font-size:0.875rem;color:rgba(230,210,165,0.9);">' +
      '<li style="display:flex;align-items:flex-start;gap:0.625rem;"><span style="color:#D5A52E;margin-top:2px;">' +
      iconSvg('phone', 16) +
      '</span><span class="tabular-nums">۰۲۱-۰۰۰۰۰۰۰۰ (قابل ویرایش)</span></li>' +
      '<li style="display:flex;align-items:flex-start;gap:0.625rem;"><span style="color:#D5A52E;margin-top:2px;">' +
      iconSvg('mail', 16) +
      '</span><span>hello@golabtoonshop.example</span></li>' +
      '<li style="display:flex;align-items:flex-start;gap:0.625rem;"><span style="color:#D5A52E;margin-top:2px;">' +
      iconSvg('mapPin', 16) +
      '</span><span>تهران — نشانی قابل ویرایش</span></li>' +
      '</ul>' +
      '<div style="padding-top:0.875rem;display:flex;flex-wrap:wrap;gap:0.5rem;font-size:0.75rem;color:rgba(230,210,165,0.75);">' +
      '<button type="button" data-action="nav" data-page="faq" style="text-decoration:underline;text-underline-offset:4px;">نحوه ثبت سفارش</button>' +
      '<span aria-hidden="true">·</span>' +
      '<button type="button" data-action="nav" data-page="account" style="text-decoration:underline;text-underline-offset:4px;">پیگیری سفارش</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      persianDividerHtml(true) +
      '<div style="padding-top:1.5rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:0.75rem;color:rgba(230,210,165,0.75);">' +
      '<p>© ۱۴۰۵ گلابتون شاپ (GOLABTOON SHOP) — تمامی حقوق محفوظ است.</p>' +
      '<div style="display:flex;align-items:center;gap:1rem;">' +
      '<span>جایگاه نماد اعتماد الکترونیکی</span>' +
      '<span aria-hidden="true">·</span>' +
      '<span>جایگاه نشان ساماندهی</span>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</footer>';
  }

  // =========================================================================
  // Pages Rendering
  // =========================================================================
  function renderHomePage() {
    var categoriesHtml = CATEGORIES.map(function (cat) {
      return (
        '<button type="button" class="arch-card" data-action="nav" data-page="shop" data-category="' +
        cat.slug +
        '">' +
        '<div class="arch-card__frame">' +
        brandImgHtml(cat.image, cat.title, false) +
        '</div>' +
        '<div class="arch-card__body">' +
        '<div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.375rem;">' +
        '<h3 style="font-size:1.125rem;font-weight:700;color:#F4E8D0;">' +
        escapeHtml(cat.title) +
        '</h3>' +
        '<span style="font-size:0.75rem;color:rgba(230,210,165,0.8);">' +
        escapeHtml(cat.seasonTag) +
        '</span>' +
        '</div>' +
        '<p style="font-size:0.875rem;color:rgba(230,210,165,0.85);line-height:1.65;">' +
        escapeHtml(cat.description) +
        '</p>' +
        '</div>' +
        '<span style="display:inline-flex;align-items:center;gap:0.375rem;font-size:0.75rem;font-weight:600;color:#D5A52E;padding-top:0.5rem;">' +
        '<span>مشاهده محصولات</span>' +
        iconSvg('arrowLeft', 14) +
        '</span>' +
        '</div>' +
        '</button>'
      );
    }).join('');

    var bestSellersHtml = PRODUCTS.slice(0, 8).map(renderProductCard).join('');

    var values = [
      {
        num: '۰۱',
        title: 'طعم‌های اصیل',
        desc: 'تجربه طعم‌های آشنا و دوست‌داشتنی ایرانی با دستورپخت‌های خانگی.',
        icon: 'flower',
      },
      {
        num: '۰۲',
        title: 'توجه به کیفیت',
        desc: 'اهمیت دادن به انتخاب مواد اولیه تازه و دقت در تمام مراحل آماده‌سازی.',
        icon: 'shield',
      },
      {
        num: '۰۳',
        title: 'حس خوب خانگی',
        desc: 'محصولاتی با الهام از هنر، صبوری و سلیقه سفره‌آرایی خانه‌های ایرانی.',
        icon: 'heartHand',
      },
      {
        num: '۰۴',
        title: 'بسته‌بندی با سلیقه',
        desc: 'توجه به زیبایی ظروف شیشه‌ای، جزئیات پارچه کتان و ارسال ایمن سفارش‌ها.',
        icon: 'packageCheck',
      },
    ];

    var valuesHtml = values
      .map(function (v) {
        return (
          '<div class="value-card">' +
          '<div style="display:flex;align-items:center;justify-content:space-between;">' +
          '<span style="color:#D5A52E;">' +
          iconSvg(v.icon, 24) +
          '</span>' +
          '<span class="tabular-nums" style="font-size:0.75rem;font-weight:600;color:#B51F2A;background-color:#F4E8D0;padding:2px 8px;border-radius:4px;">' +
          v.num +
          '</span>' +
          '</div>' +
          '<h4 style="font-size:1rem;font-weight:700;color:#F4E8D0;">' +
          v.title +
          '</h4>' +
          '<p style="font-size:0.875rem;color:rgba(230,210,165,0.85);line-height:1.65;">' +
          v.desc +
          '</p>' +
          '</div>'
        );
      })
      .join('');

    var seasonalHtml = SEASONAL_ITEMS.map(function (item) {
      return (
        '<button type="button" class="seasonal-card" data-action="nav" data-page="shop" data-category="' +
        item.category +
        '">' +
        '<div style="aspect-ratio:4/3;overflow:hidden;width:100%;">' +
        brandImgHtml(item.image, item.title, false) +
        '</div>' +
        '<div style="padding:1rem;display:flex;flex-direction:column;gap:0.375rem;flex:1;">' +
        '<span class="eyebrow-crimson">' +
        escapeHtml(item.season) +
        '</span>' +
        '<h3 style="font-size:0.95rem;font-weight:700;color:#173D30;">' +
        escapeHtml(item.title) +
        '</h3>' +
        '<p style="font-size:0.75rem;color:rgba(96,65,46,0.85);line-height:1.6;">' +
        escapeHtml(item.description) +
        '</p>' +
        '</div>' +
        '</button>'
      );
    }).join('');

    var recipesHtml = RECIPES.map(function (r) {
      return (
        '<article class="recipe-card" data-action="open-recipe" data-id="' +
        r.id +
        '">' +
        '<div>' +
        '<div style="aspect-ratio:4/3;overflow:hidden;background-color:rgba(230,210,165,0.45);">' +
        brandImgHtml(r.image, r.title, false) +
        '</div>' +
        '<div style="padding:1rem;display:flex;flex-direction:column;gap:0.625rem;">' +
        '<div style="display:flex;align-items:center;gap:0.5rem;font-size:0.75rem;color:#176D79;font-weight:500;">' +
        '<span>' +
        escapeHtml(r.category) +
        '</span>' +
        '<span aria-hidden="true">·</span>' +
        '<span style="display:inline-flex;align-items:center;gap:0.25rem;">' +
        iconSvg('clock', 12) +
        escapeHtml(r.readingTime) +
        '</span>' +
        '</div>' +
        '<h3 style="font-size:0.95rem;font-weight:700;color:#173D30;line-height:1.45;">' +
        escapeHtml(r.title) +
        '</h3>' +
        '<p style="font-size:0.75rem;color:rgba(96,65,46,0.85);line-height:1.6;">' +
        escapeHtml(r.excerpt) +
        '</p>' +
        '</div>' +
        '</div>' +
        '<div style="padding:0.5rem 1rem 1rem;">' +
        '<span style="font-size:0.75rem;font-weight:600;color:#173D30;display:inline-flex;align-items:center;gap:0.375rem;">' +
        '<span>مطالعه مطلب</span>' +
        iconSvg('arrowLeft', 14) +
        '</span>' +
        '</div>' +
        '</article>'
      );
    }).join('');

    var testimonialsHtml = SAMPLE_REVIEWS.map(function (rev) {
      var stars = '';
      for (var i = 0; i < rev.rating; i++) {
        stars += '<span style="color:#D5A52E;display:inline-flex;">' + starSvg(15) + '</span>';
      }
      return (
        '<div class="surface-card" style="display:flex;flex-direction:column;justify-content:space-between;gap:1rem;">' +
        '<div style="display:flex;flex-direction:column;gap:0.75rem;">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">' +
        '<div style="display:flex;align-items:center;gap:4px;">' +
        stars +
        '</div>' +
        '<span style="font-size:11px;color:#176D79;font-weight:500;">محصول: ' +
        escapeHtml(rev.purchasedProduct) +
        '</span>' +
        '</div>' +
        '<p style="font-size:0.875rem;color:#60412E;line-height:1.65;">«' +
        escapeHtml(rev.comment) +
        '»</p>' +
        '</div>' +
        '<div style="padding-top:0.75rem;border-top:1px solid rgba(213,165,46,0.25);display:flex;align-items:center;justify-content:space-between;font-size:0.75rem;color:#176D79;">' +
        '<span style="font-weight:600;color:#173D30;">' +
        escapeHtml(rev.author) +
        '</span>' +
        '<span>' +
        escapeHtml(rev.city) +
        '</span>' +
        '</div>' +
        '</div>'
      );
    }).join('');

    var igHtml = INSTAGRAM_TILES.map(function (tile) {
      return (
        '<div class="ig-tile">' +
        brandImgHtml(tile.image, tile.caption, false) +
        '<div class="ig-tile__caption">' +
        '<p style="font-size:11px;color:#F4E8D0;line-height:1.4;">' +
        escapeHtml(tile.caption) +
        '</p>' +
        '</div>' +
        '</div>'
      );
    }).join('');

    var newsletterContent = state.newsletterDone
      ? '<div style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.25rem;border-radius:0.75rem;background-color:#D5A52E;color:#100D0B;font-size:0.875rem;font-weight:600;margin-inline:auto;">' +
        iconSvg('checkCircle', 16) +
        '<span>عضویت شما در خبرنامه گلابتون شاپ با موفقیت ثبت شد.</span>' +
        '</div>'
      : '<form id="newsletter-form" style="max-width:28rem;width:100%;margin-inline:auto;display:flex;flex-wrap:wrap;gap:0.625rem;">' +
        '<input type="email" id="newsletter-email" value="' +
        escapeHtml(state.newsletterEmail) +
        '" placeholder="آدرس ایمیل شما" class="field-input" style="flex:1;min-width:200px;height:3rem;background-color:#F4E8D0;" />' +
        '<button type="submit" class="btn-gold" style="height:3rem;">عضویت در خبرنامه</button>' +
        '</form>' +
        (state.newsletterError
          ? '<p style="font-size:0.75rem;color:#E6D2A5;font-weight:500;">' +
            escapeHtml(state.newsletterError) +
            '</p>'
          : '');

    return (
      '<div class="bg-persian-ivory" style="padding-bottom:5rem;">' +
      // 1. Royal Hero
      '<section class="hero-section bg-royal-persian">' +
      '<div class="container hero-grid">' +
      '<div class="hero-copy">' +
      '<div class="hero-brand-row">' +
      officialLogoHtml('hero') +
      '<div style="display:flex;flex-direction:column;gap:0.375rem;">' +
      '<p class="eyebrow-gold">عطر اصالت، طعم خونه</p>' +
      '<p class="font-latin-serif" style="font-size:0.75rem;letter-spacing:0.26em;color:#E6D2A5;text-transform:uppercase;">GOLABTOON SHOP</p>' +
      '<div style="height:1px;width:5rem;background-color:rgba(213,165,46,0.6);"></div>' +
      '</div>' +
      '</div>' +
      '<h1 class="hero-title">به دنیای طعم‌های اصیل خوش آمدید</h1>' +
      '<p class="hero-subtitle">گلابتون شاپ؛ جایی که عطر خاطره، زیبایی سنت و طعم‌های دوست‌داشتنی ایرانی در کنار هم قرار می‌گیرند.</p>' +
      '<div class="hero-actions">' +
      '<button type="button" class="btn-gold" data-action="nav" data-page="shop" data-category="all"><span>ورود به فروشگاه</span>' +
      iconSvg('arrowLeft', 16) +
      '</button>' +
      '<button type="button" class="btn-outline-gold" data-action="nav" data-page="about">داستان گلابتون</button>' +
      '</div>' +
      '</div>' +
      '<div class="hero-visual">' +
      '<div class="hero-frame">' +
      '<div style="position:absolute;top:0.5rem;right:0.5rem;z-index:20;">' +
      cornerOrnamentHtml('top-right') +
      '</div>' +
      '<div style="position:absolute;top:0.5rem;left:0.5rem;z-index:20;">' +
      cornerOrnamentHtml('top-left') +
      '</div>' +
      '<div class="hero-frame__inner">' +
      brandImgHtml(
        IMAGE_ASSETS.heroTable,
        'میز چوبی سنتی ایرانی با شیشه‌های عرقیجات گیاهی، ترشی خانگی، مربای به و گلبرگ‌های گل محمدی',
        true
      ) +
      '<div class="hero-frame__gradient"></div>' +
      '<div class="hero-frame__caption">' +
      '<p class="eyebrow-gold">گلچین دست‌ساز آشپزخانه ایرانی</p>' +
      '<p style="font-size:0.95rem;font-weight:600;margin-top:2px;">ترشی‌های خانگی، عرقیجات معطر و مرباهای اصیل</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      // 2. Royal Tilework Persian Arch Categories
      '<section class="section-tilework bg-royal-tilework">' +
      '<div class="container">' +
      '<div class="section-header-split">' +
      '<div>' +
      '<p class="eyebrow-gold" style="margin-bottom:0.5rem;">ایوان طعم‌های اصیل</p>' +
      '<h2 class="heading-ivory">از دنیای گلابتون انتخاب کنید</h2>' +
      '<p class="text-muted-champagne" style="margin-top:0.375rem;">هر سلیقه‌ای، یک طعم دوست‌داشتنی</p>' +
      '</div>' +
      '<button type="button" data-action="nav" data-page="shop" data-category="all" style="font-size:0.875rem;font-weight:600;color:#D5A52E;display:inline-flex;align-items:center;gap:0.375rem;">' +
      '<span>همه دسته‌بندی‌ها</span>' +
      iconSvg('arrowLeft', 16) +
      '</button>' +
      '</div>' +
      '<div class="cat-grid">' +
      categoriesHtml +
      '</div>' +
      '</div>' +
      '</section>' +
      // 3. Best Sellers
      '<section class="container section-py">' +
      '<div style="text-align:center;max-width:42rem;margin-inline:auto;margin-bottom:3rem;">' +
      persianDividerHtml(false) +
      '<h2 class="heading-emerald" style="margin-top:0.75rem;">محبوب‌ترین طعم‌های گلابتون</h2>' +
      '<p class="text-muted-walnut" style="margin-top:0.5rem;">محصولاتی که جای خودشان را در دل مشتریان باز کرده‌اند</p>' +
      '</div>' +
      '<div class="products-grid-4">' +
      bestSellersHtml +
      '</div>' +
      '<div style="margin-top:3rem;text-align:center;">' +
      '<button type="button" class="btn-emerald" data-action="nav" data-page="shop" data-category="all">مشاهده همه محصولات</button>' +
      '</div>' +
      '</section>' +
      // 4. Rose Garden Brand Story
      '<section class="section-rose-story bg-rose-garden">' +
      '<div class="container" style="display:flex;flex-direction:column;gap:4rem;">' +
      '<div class="about-story-grid">' +
      '<div class="about-col-6">' +
      '<div style="padding:0.5rem;border-radius:1.5rem;border:1px solid rgba(213,165,46,0.5);background-color:rgba(16,13,11,0.4);box-shadow:var(--shadow-xl);">' +
      '<div style="aspect-ratio:16/11;border-radius:1rem;overflow:hidden;">' +
      brandImgHtml(
        IMAGE_ASSETS.brandStory,
        'آشپزخانه سنتی گلابتون شاپ با سبد سبزی تازه، گلبرگ گل محمدی و شیشه‌های مربا و ترشی',
        false
      ) +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="about-col-6" style="display:flex;flex-direction:column;gap:1.25rem;">' +
      '<p class="eyebrow-gold">داستان یک طعم اصیل</p>' +
      '<h2 class="heading-ivory">بعضی طعم‌ها، بوی خاطره می‌دهند...</h2>' +
      '<p style="font-size:1rem;color:rgba(230,210,165,0.9);line-height:1.9;">گلابتون شاپ از عشق به خوراکی‌های خانگی و طعم‌های اصیل ایرانی الهام گرفته است. از عطر گیاهان خوشبو تا ترشی‌های رنگارنگ و مرباهای دلنشین، هر محصول یادآور سادگی، صمیمیت و گرمای خانه است.</p>' +
      '<div style="padding-top:0.5rem;">' +
      '<button type="button" class="btn-gold" data-action="nav" data-page="about"><span>بیشتر درباره ما بدانید</span>' +
      iconSvg('arrowLeft', 16) +
      '</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div style="padding-top:2.5rem;border-top:1px solid rgba(213,165,46,0.25);">' +
      '<h3 style="font-size:1.25rem;font-weight:700;color:#F4E8D0;margin-bottom:2rem;text-align:center;">چرا گلابتون شاپ؟</h3>' +
      '<div class="values-grid">' +
      valuesHtml +
      '</div>' +
      '</div>' +
      '</div>' +
      '</section>' +
      // 5. Featured Banner + Seasonal
      '<section class="container section-py" style="display:flex;flex-direction:column;gap:4rem;">' +
      '<div class="featured-banner">' +
      '<div class="featured-banner__img">' +
      brandImgHtml(IMAGE_ASSETS.heroTable, 'مجموعه خوراکی‌های اصیل گلابتون', false) +
      '</div>' +
      '<div class="featured-banner__overlay"></div>' +
      '<div style="position:relative;z-index:10;padding:2rem 2.5rem;max-width:40rem;display:flex;flex-direction:column;align-items:flex-start;gap:1.25rem;color:#F4E8D0;">' +
      '<div style="display:flex;align-items:center;gap:0.5rem;font-size:0.75rem;color:#D5A52E;">' +
      iconSvg('sparkles', 16) +
      '<span>مجموعه برگزیده سفره ایرانی</span>' +
      '</div>' +
      '<h2 class="heading-ivory" style="font-size:2.4rem;">مزه‌های اصیل، برای لحظه‌های ناب</h2>' +
      '<p style="font-size:0.95rem;color:rgba(230,210,165,0.9);line-height:1.75;">انتخابی خوش‌طعم برای سفره‌های گرم و دورهمی‌های دوست‌داشتنی؛ ترکیبی از ترشی‌های ترد، شربت‌های معطر و مرباهای خانگی.</p>' +
      '<button type="button" class="btn-gold" data-action="nav" data-page="shop" data-category="all">کشف محصولات گلابتون</button>' +
      '</div>' +
      '</div>' +
      '<div>' +
      '<div style="margin-bottom:2rem;">' +
      '<h2 class="heading-emerald">طعم هر فصل در گلابتون</h2>' +
      '<p class="text-muted-walnut" style="font-size:0.875rem;margin-top:0.25rem;">پیشنهادهای فصلی متناسب با حال‌وهوای هر زمان از سال</p>' +
      '</div>' +
      '<div class="seasonal-grid">' +
      seasonalHtml +
      '</div>' +
      '</div>' +
      '</section>' +
      // 6. Recipes
      '<section class="container" style="padding-bottom:4rem;">' +
      '<div style="margin-bottom:2rem;">' +
      '<p class="eyebrow-turquoise" style="margin-bottom:0.375rem;">مجله آشپزی و پذیرایی</p>' +
      '<h2 class="heading-emerald">آشپزی با عطر خاطره</h2>' +
      '</div>' +
      '<div class="recipes-grid">' +
      recipesHtml +
      '</div>' +
      '</section>' +
      // 7. Testimonials, Instagram & Newsletter
      '<section class="container" style="display:flex;flex-direction:column;gap:5rem;">' +
      '<div>' +
      '<div style="text-align:center;margin-bottom:2.5rem;">' +
      persianDividerHtml(false) +
      '<h2 class="heading-emerald" style="margin-top:0.5rem;">خاطره‌های خوش از گلابتون</h2>' +
      '<p style="font-size:0.75rem;color:rgba(96,65,46,0.75);margin-top:0.35rem;">نمونه قالب دیدگاه‌های مشتریان (قابل ویرایش با نظرات واقعی فروشگاه)</p>' +
      '</div>' +
      '<div class="testimonials-grid">' +
      testimonialsHtml +
      '</div>' +
      '</div>' +
      '<div>' +
      '<div class="section-header-split" style="margin-bottom:1.5rem;">' +
      '<div>' +
      '<h2 class="heading-emerald">گلابتون را دنبال کنید</h2>' +
      '<p class="text-muted-walnut" style="font-size:0.875rem;margin-top:0.25rem;">از محصولات تازه تا لحظه‌های خوشمزه پشت صحنه</p>' +
      '</div>' +
      '<button type="button" data-action="nav" data-page="contact" style="display:inline-flex;align-items:center;gap:0.5rem;font-size:0.875rem;font-weight:600;color:#173D30;">' +
      iconSvg('instagram', 16) +
      '<span>مشاهده صفحه اینستاگرام (@golabtoon.shop)</span>' +
      '</button>' +
      '</div>' +
      '<div class="instagram-grid">' +
      igHtml +
      '</div>' +
      '</div>' +
      '<div class="newsletter-box bg-royal-persian">' +
      '<div style="display:flex;justify-content:center;">' +
      officialLogoHtml('sm') +
      '</div>' +
      '<h2 class="heading-ivory">همیشه از طعم‌های تازه باخبر باشید</h2>' +
      '<p style="font-size:0.95rem;color:rgba(230,210,165,0.9);max-width:36rem;margin-inline:auto;">برای اطلاع از محصولات جدید فصلی، پیشنهادهای ویژه و دستورهای خوشمزه همراه ما باشید.</p>' +
      newsletterContent +
      '<p style="font-size:11px;color:rgba(230,210,165,0.65);">شماره تماس و نشانی‌های نمایش‌داده‌شده در نسخه پیش‌نمایش کاملاً قابل ویرایش هستند (' +
      toPersianDigits(1405) +
      ').</p>' +
      '</div>' +
      '</section>' +
      '</div>'
    );
  }

  function getFilteredShopProducts() {
    var q = state.shopSearch.trim();
    var list = PRODUCTS.filter(function (p) {
      if (state.activeCategory !== 'all' && p.category !== state.activeCategory) return false;
      if (state.shopOnlyAvailable && !p.inStock) return false;
      if (p.price > state.shopMaxPrice) return false;
      if (
        q &&
        p.name.indexOf(q) === -1 &&
        p.categoryLabel.indexOf(q) === -1 &&
        p.shortDescription.indexOf(q) === -1
      ) {
        return false;
      }
      return true;
    });

    return list.slice().sort(function (a, b) {
      if (state.shopSort === 'price-asc') return a.price - b.price;
      if (state.shopSort === 'price-desc') return b.price - a.price;
      if (state.shopSort === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return b.popularityScore - a.popularityScore;
    });
  }

  function renderFilterControlsHtml() {
    var catButtons =
      '<button type="button" class="chip-btn' +
      (state.activeCategory === 'all' ? ' is-active' : '') +
      '" data-action="shop-category" data-category="all"><span>همه طعم‌ها (' +
      toPersianDigits(PRODUCTS.length) +
      ')</span></button>' +
      CATEGORIES.map(function (cat) {
        var cnt = PRODUCTS.filter(function (p) {
          return p.category === cat.slug;
        }).length;
        return (
          '<button type="button" class="chip-btn' +
          (state.activeCategory === cat.slug ? ' is-active' : '') +
          '" data-action="shop-category" data-category="' +
          cat.slug +
          '"><span>' +
          escapeHtml(cat.title) +
          '</span><span class="tabular-nums" style="font-size:0.75rem;opacity:0.75;">' +
          toPersianDigits(cnt) +
          '</span></button>'
        );
      }).join('');

    return (
      '<div style="display:flex;flex-direction:column;gap:1.5rem;">' +
      '<div>' +
      '<h3 style="font-size:0.875rem;font-weight:700;color:#173D30;margin-bottom:0.75rem;">دسته‌بندی محصولات</h3>' +
      '<div style="display:flex;flex-direction:column;gap:0.375rem;">' +
      catButtons +
      '</div>' +
      '</div>' +
      '<div style="padding-top:1.25rem;border-top:1px solid rgba(213,165,46,0.3);">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">' +
      '<h3 style="font-size:0.875rem;font-weight:700;color:#173D30;">سقف قیمت</h3>' +
      '<span id="shop-price-label" class="tabular-nums" style="font-size:0.75rem;font-weight:600;color:#176D79;">تا ' +
      formatToman(state.shopMaxPrice) +
      ' تومان</span>' +
      '</div>' +
      '<input type="range" min="150000" max="400000" step="15000" value="' +
      state.shopMaxPrice +
      '" data-shop-range="true" style="width:100%;accent-color:#173D30;cursor:pointer;" />' +
      '<div class="tabular-nums" style="display:flex;justify-content:space-between;font-size:11px;color:rgba(96,65,46,0.7);margin-top:0.25rem;">' +
      '<span>۱۵۰٬۰۰۰</span><span>۴۰۰٬۰۰۰ تومان</span>' +
      '</div>' +
      '</div>' +
      '<div style="padding-top:1.25rem;border-top:1px solid rgba(213,165,46,0.3);">' +
      '<label style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;">' +
      '<span style="font-size:0.875rem;font-weight:500;color:#173D30;">فقط کالاهای موجود</span>' +
      '<input type="checkbox" data-shop-stock="true"' +
      (state.shopOnlyAvailable ? ' checked' : '') +
      ' style="width:1rem;height:1rem;accent-color:#173D30;cursor:pointer;" />' +
      '</label>' +
      '</div>' +
      '<button type="button" data-action="reset-shop-filters" style="width:100%;padding:0.625rem;border-radius:0.75rem;border:1px solid rgba(213,165,46,0.6);font-size:0.75rem;font-weight:600;color:#173D30;">پاک کردن فیلترها</button>' +
      '</div>'
    );
  }

  function renderShopResultsInner() {
    var filtered = getFilteredShopProducts();
    var visible = filtered.slice(0, state.shopVisibleCount);

    var resultsHtml =
      visible.length === 0
        ? '<div class="surface-card" style="padding:3rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem;">' +
          '<p style="font-size:1rem;font-weight:700;color:#173D30;">محصولی مطابق با فیلترهای انتخابی یافت نشد.</p>' +
          '<p style="font-size:0.875rem;color:rgba(96,65,46,0.8);">می‌توانید سقف قیمت را افزایش دهید یا فیلترها را بازنشانی کنید.</p>' +
          '<button type="button" class="btn-emerald" data-action="reset-shop-filters">نمایش همه محصولات</button>' +
          '</div>'
        : '<div class="products-grid-3">' + visible.map(renderProductCard).join('') + '</div>';

    var loadMoreHtml =
      state.shopVisibleCount < filtered.length
        ? '<div style="padding-top:1.5rem;text-align:center;"><button type="button" class="btn-emerald" data-action="shop-load-more">بارگذاری محصولات بیشتر</button></div>'
        : '';

    return {
      countLabel:
        'نمایش ' +
        toPersianDigits(visible.length) +
        ' از ' +
        toPersianDigits(filtered.length) +
        ' محصول',
      html: resultsHtml + loadMoreHtml,
    };
  }

  function updateShopResultsOnly() {
    var res = renderShopResultsInner();
    var countEl = document.getElementById('shop-count-label');
    var containerEl = document.getElementById('shop-results-container');
    var priceLabels = document.querySelectorAll('#shop-price-label');
    if (countEl) countEl.textContent = res.countLabel;
    if (containerEl) containerEl.innerHTML = res.html;
    priceLabels.forEach(function (el) {
      el.textContent = 'تا ' + formatToman(state.shopMaxPrice) + ' تومان';
    });
  }

  function renderShopPage() {
    var activeCatObj = CATEGORIES.find(function (c) {
      return c.slug === state.activeCategory;
    });
    var activeLabel =
      state.activeCategory === 'all'
        ? 'همه محصولات'
        : activeCatObj
        ? activeCatObj.title
        : 'فروشگاه';

    var res = renderShopResultsInner();

    return (
      '<div class="bg-persian-ivory">' +
      '<div class="container page-wrap">' +
      '<div class="page-header-bar">' +
      '<div>' +
      '<p class="eyebrow-turquoise" style="margin-bottom:0.375rem;">فروشگاه گلابتون شاپ / ' +
      escapeHtml(activeLabel) +
      '</p>' +
      '<h1 class="heading-emerald">فروشگاه گلابتون</h1>' +
      '<p class="text-muted-walnut" style="font-size:0.875rem;margin-top:0.25rem;">همه طعم‌های دوست‌داشتنی در یک جا</p>' +
      '</div>' +
      '<p id="shop-count-label" class="tabular-nums" style="font-size:0.75rem;font-weight:500;color:#176D79;">' +
      res.countLabel +
      '</p>' +
      '</div>' +
      '<div class="shop-layout">' +
      '<aside class="shop-sidebar">' +
      renderFilterControlsHtml() +
      '</aside>' +
      '<div class="shop-main">' +
      '<div class="shop-toolbar">' +
      '<div class="search-input-wrap">' +
      '<span class="search-input-wrap__icon">' +
      iconSvg('search', 16) +
      '</span>' +
      '<input type="text" id="shop-search-input" value="' +
      escapeHtml(state.shopSearch) +
      '" placeholder="جستجو بین محصولات فروشگاه..." class="field-input" />' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:0.625rem;">' +
      '<button type="button" class="btn-emerald mobile-menu-btn" style="width:auto;height:2.5rem;padding-inline:1rem;font-size:0.75rem;" data-action="open-mobile-filters">' +
      iconSvg('sliders', 16) +
      '<span>فیلترها</span>' +
      '</button>' +
      '<select id="shop-sort-select" aria-label="مرتب‌سازی محصولات" class="field-select" style="height:2.5rem;width:auto;font-size:0.8rem;">' +
      '<option value="popular"' +
      (state.shopSort === 'popular' ? ' selected' : '') +
      '>مرتب‌سازی: محبوب‌ترین</option>' +
      '<option value="newest"' +
      (state.shopSort === 'newest' ? ' selected' : '') +
      '>مرتب‌سازی: جدیدترین</option>' +
      '<option value="price-asc"' +
      (state.shopSort === 'price-asc' ? ' selected' : '') +
      '>ارزان‌ترین</option>' +
      '<option value="price-desc"' +
      (state.shopSort === 'price-desc' ? ' selected' : '') +
      '>گران‌ترین</option>' +
      '</select>' +
      '</div>' +
      '</div>' +
      '<div id="shop-results-container">' +
      res.html +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }

  function renderProductDetailPage() {
    var product =
      PRODUCTS.find(function (p) {
        return p.id === state.selectedProductId;
      }) || PRODUCTS[0];

    var activeVariant =
      product.variants &&
      product.variants.find(function (v) {
        return v.id === state.pdpVariantId;
      });
    var effectivePrice = activeVariant ? activeVariant.price : product.price;
    var effectiveWeight = activeVariant ? activeVariant.label : product.weight;
    var isWishlisted = state.wishlist.indexOf(product.id) > -1;
    var mainImg = product.gallery[state.pdpImageIdx] || product.image;

    var thumbsHtml =
      product.gallery.length > 1
        ? '<div class="pdp-thumbs">' +
          product.gallery
            .map(function (img, idx) {
              return (
                '<button type="button" class="pdp-thumb-btn' +
                (state.pdpImageIdx === idx ? ' is-active' : '') +
                '" data-action="pdp-thumb" data-idx="' +
                idx +
                '">' +
                brandImgHtml(img, product.name + ' تصویر ' + toPersianDigits(idx + 1), false) +
                '</button>'
              );
            })
            .join('') +
          '</div>'
        : '';

    var variantsHtml =
      product.variants && product.variants.length
        ? '<div style="display:flex;flex-direction:column;gap:0.625rem;">' +
          '<p style="font-size:0.75rem;font-weight:700;color:#173D30;">انتخاب وزن / حجم:</p>' +
          '<div style="display:flex;flex-wrap:wrap;gap:0.625rem;">' +
          product.variants
            .map(function (v) {
              return (
                '<button type="button" class="variant-btn' +
                (activeVariant && activeVariant.id === v.id ? ' is-active' : '') +
                '" data-action="pdp-variant" data-variant-id="' +
                v.id +
                '">' +
                escapeHtml(v.label) +
                '</button>'
              );
            })
            .join('') +
          '</div></div>'
        : '<div style="font-size:0.75rem;color:#60412E;">وزن / حجم بسته: <strong style="color:#173D30;">' +
          escapeHtml(product.weight) +
          '</strong></div>';

    var tabContentHtml = '';
    if (state.pdpTab === 'intro') {
      tabContentHtml =
        '<div style="max-width:48rem;display:flex;flex-direction:column;gap:0.75rem;font-size:0.95rem;color:#60412E;line-height:1.9;">' +
        '<p>' +
        escapeHtml(product.fullDescription) +
        '</p>' +
        '<p class="eyebrow-turquoise" style="font-weight:400;">توضیحات این بخش قابل ویرایش و سفارشی‌سازی با جزئیات سری ساخت شما است.</p>' +
        '</div>';
    } else if (state.pdpTab === 'ingredients') {
      tabContentHtml =
        '<ul style="list-style:disc inside;display:flex;flex-direction:column;gap:0.625rem;font-size:0.875rem;color:#60412E;">' +
        product.ingredients
          .map(function (ing) {
            return '<li>' + escapeHtml(ing) + '</li>';
          })
          .join('') +
        '</ul>';
    } else if (state.pdpTab === 'specs') {
      tabContentHtml =
        '<div style="max-width:42rem;">' +
        product.specifications
          .map(function (spec) {
            return (
              '<div style="padding-block:0.75rem;border-bottom:1px solid rgba(213,165,46,0.25);display:flex;align-items:center;justify-content:space-between;gap:1rem;font-size:0.875rem;">' +
              '<span style="color:#176D79;font-weight:500;">' +
              escapeHtml(spec.label) +
              '</span>' +
              '<span style="font-weight:600;color:#173D30;">' +
              escapeHtml(spec.value) +
              '</span>' +
              '</div>'
            );
          })
          .join('') +
        '</div>';
    } else if (state.pdpTab === 'storage') {
      tabContentHtml =
        '<p style="max-width:48rem;font-size:0.95rem;color:#60412E;line-height:1.9;">' +
        escapeHtml(product.storageInstructions) +
        '</p>';
    } else {
      var reviewsList = state.pdpReviews
        .map(function (rev) {
          return (
            '<div style="padding:1rem;border-radius:1rem;background-color:rgba(244,232,208,0.55);border:1px solid rgba(213,165,46,0.3);display:flex;flex-direction:column;gap:0.5rem;">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;font-size:0.75rem;color:#176D79;">' +
            '<span style="font-weight:600;color:#173D30;">' +
            escapeHtml(rev.author) +
            '</span>' +
            '<span>' +
            escapeHtml(rev.date) +
            '</span>' +
            '</div>' +
            '<p style="font-size:0.875rem;color:#60412E;line-height:1.65;">' +
            escapeHtml(rev.comment) +
            '</p>' +
            '</div>'
          );
        })
        .join('');

      tabContentHtml =
        '<div class="pdp-grid" style="gap:2rem;">' +
        '<div class="pdp-col-6" style="position:static;display:flex;flex-direction:column;gap:1rem;">' +
        reviewsList +
        '</div>' +
        '<form id="pdp-review-form" class="pdp-col-6" style="position:static;background-color:rgba(244,232,208,0.65);border:1px solid rgba(213,165,46,0.4);border-radius:1rem;padding:1.25rem;display:flex;flex-direction:column;gap:1rem;">' +
        '<h3 style="font-size:0.875rem;font-weight:700;color:#173D30;">ثبت دیدگاه شما</h3>' +
        '<input type="text" id="pdp-review-author" placeholder="نام شما" required class="field-input" style="background-color:#FBF6EB;" />' +
        '<textarea rows="3" id="pdp-review-text" placeholder="تجربه خود از طعم و بسته‌بندی این محصول را بنویسید..." required class="field-textarea" style="background-color:#FBF6EB;"></textarea>' +
        '<button type="submit" class="btn-emerald" style="width:100%;">ارسال دیدگاه</button>' +
        (state.pdpReviewSaved
          ? '<p style="font-size:0.75rem;color:#173D30;font-weight:600;">دیدگاه شما با موفقیت به فهرست اضافه شد.</p>'
          : '') +
        '</form>' +
        '</div>';
    }

    var related = PRODUCTS.filter(function (p) {
      return p.category === product.category && p.id !== product.id;
    }).slice(0, 4);

    var recent = state.recentlyViewedIds
      .filter(function (id) {
        return id !== product.id;
      })
      .map(function (id) {
        return PRODUCTS.find(function (p) {
          return p.id === id;
        });
      })
      .filter(Boolean)
      .slice(0, 4);

    return (
      '<div class="bg-persian-ivory">' +
      '<div class="container page-wrap" style="padding-bottom:8rem;display:flex;flex-direction:column;gap:4rem;">' +
      '<nav aria-label="مسیر صفحه" style="display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem;font-size:0.75rem;color:#176D79;font-weight:500;">' +
      '<button type="button" data-action="nav" data-page="home">خانه</button>' +
      '<span>/</span>' +
      '<button type="button" data-action="nav" data-page="shop" data-category="all">فروشگاه</button>' +
      '<span>/</span>' +
      '<button type="button" data-action="nav" data-page="shop" data-category="' +
      product.category +
      '">' +
      escapeHtml(product.categoryLabel) +
      '</button>' +
      '<span>/</span>' +
      '<span style="color:#173D30;font-weight:700;">' +
      escapeHtml(product.name) +
      '</span>' +
      '</nav>' +
      '<div class="pdp-grid">' +
      '<div class="pdp-col-6">' +
      '<div class="pdp-gallery-main' +
      (state.pdpZoomed ? ' is-zoomed' : '') +
      '" data-action="pdp-toggle-zoom">' +
      brandImgHtml(mainImg, product.name, true) +
      '<span class="pdp-zoom-badge">' +
      iconSvg('zoomIn', 16) +
      '</span>' +
      '</div>' +
      thumbsHtml +
      '</div>' +
      '<div class="pdp-col-6 surface-card surface-card--lg" style="display:flex;flex-direction:column;gap:1.5rem;box-shadow:var(--shadow-sm);">' +
      '<div style="display:flex;flex-direction:column;gap:0.625rem;">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;font-size:0.75rem;font-weight:600;">' +
      '<span style="color:#176D79;">' +
      escapeHtml(product.categoryLabel) +
      '</span>' +
      '<span style="color:' +
      (product.inStock ? '#286044' : '#B51F2A') +
      ';">' +
      (product.inStock ? 'موجود و آماده ارسال' : 'ناموجود موقت') +
      '</span>' +
      '</div>' +
      '<h1 class="heading-emerald">' +
      escapeHtml(product.name) +
      '</h1>' +
      '<p style="font-size:0.95rem;color:#60412E;line-height:1.7;">' +
      escapeHtml(product.shortDescription) +
      '</p>' +
      '</div>' +
      '<div style="padding-top:1rem;border-top:1px solid rgba(213,165,46,0.3);display:flex;align-items:baseline;gap:0.5rem;">' +
      '<span class="tabular-nums" style="font-size:1.75rem;font-weight:700;color:#173D30;">' +
      formatToman(effectivePrice) +
      '</span>' +
      '<span style="font-size:0.875rem;color:rgba(96,65,46,0.8);">تومان</span>' +
      '</div>' +
      variantsHtml +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;padding-top:0.5rem;">' +
      '<div class="qty-stepper" style="width:9rem;height:3rem;padding-inline:0.35rem;">' +
      '<button type="button" class="qty-stepper__btn" data-action="pdp-qty" data-delta="1" aria-label="افزایش تعداد">' +
      iconSvg('plus', 16) +
      '</button>' +
      '<span class="tabular-nums" style="font-size:0.95rem;font-weight:700;color:#173D30;">' +
      toPersianDigits(state.pdpQty) +
      '</span>' +
      '<button type="button" class="qty-stepper__btn" data-action="pdp-qty" data-delta="-1" aria-label="کاهش تعداد">' +
      iconSvg('minus', 16) +
      '</button>' +
      '</div>' +
      '<button type="button" class="btn-emerald" style="flex:1;min-width:190px;height:3rem;" ' +
      (!product.inStock ? 'disabled ' : '') +
      'data-action="pdp-add">' +
      (state.pdpJustAdded
        ? iconSvg('check', 16) + '<span>به سبد خرید اضافه شد</span>'
        : iconSvg('bag', 16) +
          '<span>' +
          (product.inStock ? 'افزودن به سبد خرید' : 'فعلاً ناموجود') +
          '</span>') +
      '</button>' +
      '<button type="button" data-action="toggle-wishlist" data-id="' +
      product.id +
      '" aria-label="افزودن به علاقه‌مندی‌ها" style="height:3rem;width:3rem;border-radius:0.75rem;border:1px solid rgba(213,165,46,0.5);display:flex;align-items:center;justify-content:center;' +
      (isWishlisted
        ? 'background-color:#B51F2A;color:#F4E8D0;'
        : 'background-color:rgba(244,232,208,0.55);color:#60412E;') +
      '">' +
      iconSvg('heart', 20) +
      '</button>' +
      '</div>' +
      '<div style="padding-top:1rem;border-top:1px solid rgba(213,165,46,0.3);display:flex;flex-direction:column;gap:0.625rem;font-size:0.75rem;color:#60412E;">' +
      '<div style="display:flex;align-items:center;gap:0.625rem;"><span style="color:#176D79;">' +
      iconSvg('truck', 16) +
      '</span><span>ارسال ایمن به سراسر کشور (ارسال رایگان بالای ۱٬۵۰۰٬۰۰۰ تومان)</span></div>' +
      '<div style="display:flex;align-items:center;gap:0.625rem;"><span style="color:#176D79;">' +
      iconSvg('shield', 16) +
      '</span><span>' +
      escapeHtml(product.packagingNote) +
      '</span></div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<section class="tabs-card">' +
      '<div class="tabs-header">' +
      [
        { id: 'intro', label: 'معرفی محصول' },
        { id: 'ingredients', label: 'ترکیبات' },
        { id: 'specs', label: 'مشخصات محصول' },
        { id: 'storage', label: 'شرایط نگهداری' },
        { id: 'reviews', label: 'نظرات مشتریان (' + toPersianDigits(state.pdpReviews.length) + ')' },
      ]
        .map(function (t) {
          return (
            '<button type="button" class="tab-btn' +
            (state.pdpTab === t.id ? ' is-active' : '') +
            '" data-action="pdp-tab" data-tab="' +
            t.id +
            '">' +
            t.label +
            '</button>'
          );
        })
        .join('') +
      '</div>' +
      '<div style="padding:1.75rem;">' +
      tabContentHtml +
      '</div>' +
      '</section>' +
      (related.length
        ? '<section style="display:flex;flex-direction:column;gap:1.5rem;">' +
          '<h2 class="heading-emerald">محصولات مرتبط از همین خانواده</h2>' +
          '<div class="products-grid-4">' +
          related.map(renderProductCard).join('') +
          '</div>' +
          '</section>'
        : '') +
      (recent.length
        ? '<section style="display:flex;flex-direction:column;gap:1.5rem;">' +
          '<h2 class="heading-emerald">بازدیدهای اخیر شما</h2>' +
          '<div class="products-grid-4">' +
          recent.map(renderProductCard).join('') +
          '</div>' +
          '</section>'
        : '') +
      '</div>' +
      '<div class="mobile-sticky-pdp">' +
      '<div style="min-width:0;">' +
      '<p style="font-size:0.75rem;font-weight:700;color:#173D30;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
      escapeHtml(product.name) +
      '</p>' +
      '<p class="tabular-nums" style="font-size:0.75rem;font-weight:600;color:#176D79;">' +
      formatToman(effectivePrice) +
      ' تومان</p>' +
      '</div>' +
      '<button type="button" class="btn-emerald" style="height:2.5rem;padding-inline:1.25rem;font-size:0.75rem;" ' +
      (!product.inStock ? 'disabled ' : '') +
      'data-action="pdp-add">' +
      (state.pdpJustAdded ? iconSvg('check', 16) : iconSvg('bag', 16)) +
      '<span>' +
      (product.inStock ? (state.pdpJustAdded ? 'افزوده شد' : 'افزودن به سبد خرید') : 'ناموجود') +
      '</span>' +
      '</button>' +
      '</div>' +
      '</div>'
    );
  }

  function renderCartPage() {
    if (state.cart.length === 0) {
      return (
        '<div class="bg-persian-ivory">' +
        '<div class="container" style="padding-block:5rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1.25rem;">' +
        '<div style="width:5rem;height:5rem;border-radius:999px;background-color:rgba(230,210,165,0.6);border:1px solid rgba(213,165,46,0.5);display:flex;align-items:center;justify-content:center;color:#173D30;">' +
        iconSvg('bag', 34) +
        '</div>' +
        '<h1 class="heading-emerald">سبد خرید شما هنوز خالی است!</h1>' +
        '<p class="text-muted-walnut" style="font-size:0.875rem;">وقتشه طعم‌های خوش گلابتون رو کشف کنید.</p>' +
        '<button type="button" class="btn-emerald" data-action="nav" data-page="shop" data-category="all">مشاهده محصولات</button>' +
        '</div>' +
        '</div>'
      );
    }

    var subtotal = state.cart.reduce(function (s, i) {
      return s + i.price * i.quantity;
    }, 0);
    var discountAmount =
      state.discountCode.toUpperCase() === 'GOLAB10' ? Math.round(subtotal * 0.1) : 0;
    var shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : BASE_SHIPPING_COST;
    var total = Math.max(0, subtotal - discountAmount + shippingCost);
    var totalQty = state.cart.reduce(function (s, i) {
      return s + i.quantity;
    }, 0);

    var itemsHtml = state.cart
      .map(function (item) {
        return (
          '<div class="cart-item-row">' +
          '<div style="display:flex;align-items:center;gap:1rem;min-width:0;">' +
          '<div style="width:6rem;height:5rem;border-radius:0.75rem;overflow:hidden;flex-shrink:0;border:1px solid rgba(213,165,46,0.3);">' +
          brandImgHtml(item.image, item.name, false) +
          '</div>' +
          '<div style="min-width:0;display:flex;flex-direction:column;gap:0.25rem;">' +
          '<p class="eyebrow-turquoise">' +
          escapeHtml(item.categoryLabel) +
          '</p>' +
          '<h3 style="font-size:1rem;font-weight:700;color:#173D30;">' +
          escapeHtml(item.name) +
          '</h3>' +
          '<p style="font-size:0.75rem;color:rgba(96,65,46,0.8);">' +
          escapeHtml(item.variantLabel) +
          '</p>' +
          '</div>' +
          '</div>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:1.25rem;">' +
          '<div class="qty-stepper">' +
          '<button type="button" class="qty-stepper__btn" data-action="cart-qty" data-id="' +
          item.productId +
          '" data-variant="' +
          escapeHtml(item.variantId) +
          '" data-delta="1" aria-label="افزایش تعداد">' +
          iconSvg('plus', 14) +
          '</button>' +
          '<span class="tabular-nums" style="width:2.25rem;text-align:center;font-size:0.875rem;font-weight:700;color:#173D30;">' +
          toPersianDigits(item.quantity) +
          '</span>' +
          '<button type="button" class="qty-stepper__btn" data-action="cart-qty" data-id="' +
          item.productId +
          '" data-variant="' +
          escapeHtml(item.variantId) +
          '" data-delta="-1" aria-label="کاهش تعداد">' +
          iconSvg('minus', 14) +
          '</button>' +
          '</div>' +
          '<div style="text-align:left;min-width:110px;">' +
          '<p class="tabular-nums" style="font-size:1rem;font-weight:700;color:#173D30;">' +
          formatToman(item.price * item.quantity) +
          '</p>' +
          '<p style="font-size:11px;color:rgba(96,65,46,0.75);">تومان</p>' +
          '</div>' +
          '<button type="button" data-action="cart-remove" data-id="' +
          item.productId +
          '" data-variant="' +
          escapeHtml(item.variantId) +
          '" aria-label="حذف از سبد" style="padding:0.5rem;border-radius:0.5rem;color:rgba(96,65,46,0.7);">' +
          iconSvg('trash', 16) +
          '</button>' +
          '</div>' +
          '</div>'
        );
      })
      .join('');

    return (
      '<div class="bg-persian-ivory">' +
      '<div class="container page-wrap">' +
      '<div class="page-header-bar">' +
      '<div>' +
      '<h1 class="heading-emerald">سبد خرید شما</h1>' +
      '<p class="tabular-nums eyebrow-turquoise" style="margin-top:0.25rem;">' +
      toPersianDigits(totalQty) +
      ' قلم محصول انتخاب شده</p>' +
      '</div>' +
      '<button type="button" data-action="nav" data-page="shop" data-category="all" style="font-size:0.875rem;font-weight:600;color:#173D30;">ادامه خرید</button>' +
      '</div>' +
      '<div class="cart-grid">' +
      '<div class="cart-items-col" style="display:flex;flex-direction:column;gap:1rem;">' +
      itemsHtml +
      '</div>' +
      '<aside class="cart-summary-col surface-card" style="display:flex;flex-direction:column;gap:1.25rem;box-shadow:var(--shadow-sm);">' +
      '<h2 style="font-size:1.125rem;font-weight:700;color:#173D30;">خلاصه سفارش</h2>' +
      '<form id="cart-discount-form" style="display:flex;flex-direction:column;gap:0.5rem;">' +
      '<label style="font-size:0.75rem;font-weight:500;color:#60412E;display:flex;align-items:center;gap:0.375rem;">' +
      '<span style="color:#176D79;">' +
      iconSvg('tag', 14) +
      '</span><span>کد تخفیف (نمونه: GOLAB10)</span>' +
      '</label>' +
      '<div style="display:flex;gap:0.5rem;">' +
      '<input type="text" id="cart-discount-input" value="' +
      escapeHtml(state.discountCode) +
      '" placeholder="کد را وارد کنید" class="field-input" style="height:2.5rem;" />' +
      '<button type="submit" class="btn-outline-emerald" style="height:2.5rem;padding-inline:1rem;font-size:0.75rem;">اعمال</button>' +
      '</div>' +
      (state.discountMsg
        ? '<p style="font-size:0.75rem;color:#173D30;font-weight:600;">' +
          escapeHtml(state.discountMsg) +
          '</p>'
        : '') +
      '</form>' +
      '<div style="padding-top:1rem;border-top:1px solid rgba(213,165,46,0.3);display:flex;flex-direction:column;gap:0.75rem;font-size:0.875rem;">' +
      '<div style="display:flex;justify-content:space-between;"><span>جمع کل محصولات</span><span class="tabular-nums" style="font-weight:600;">' +
      formatToman(subtotal) +
      ' تومان</span></div>' +
      (discountAmount > 0
        ? '<div style="display:flex;justify-content:space-between;color:#B51F2A;font-weight:500;"><span>تخفیف</span><span class="tabular-nums">-' +
          formatToman(discountAmount) +
          ' تومان</span></div>'
        : '') +
      '<div style="display:flex;justify-content:space-between;"><span>هزینه ارسال</span><span class="tabular-nums" style="font-weight:600;">' +
      (shippingCost === 0 ? 'رایگان' : formatToman(shippingCost) + ' تومان') +
      '</span></div>' +
      '<div style="padding-top:0.75rem;border-top:1px solid rgba(213,165,46,0.4);display:flex;justify-content:space-between;align-items:baseline;font-weight:700;color:#173D30;font-size:1rem;">' +
      '<span>مبلغ قابل پرداخت</span><span class="tabular-nums" style="font-size:1.125rem;">' +
      formatToman(total) +
      ' تومان</span></div>' +
      '</div>' +
      '<button type="button" class="btn-emerald" style="width:100%;" data-action="nav" data-page="checkout"><span>تکمیل سفارش</span>' +
      iconSvg('arrowLeft', 16) +
      '</button>' +
      '</aside>' +
      '</div>' +
      '</div>' +
      '</div>'
    );
  }

  function renderCheckoutPage() {
    var c = state.checkout;
    if (c.confirmedOrder) {
      var ord = c.confirmedOrder;
      return (
        '<div class="bg-persian-ivory">' +
        '<div class="container" style="max-width:42rem;padding-block:3.5rem;">' +
        '<div class="surface-card surface-card--lg" style="border-width:2px;text-align:center;display:flex;flex-direction:column;gap:1rem;align-items:center;">' +
        '<div style="width:4rem;height:4rem;border-radius:999px;background-color:#173D30;border:1px solid rgba(213,165,46,0.6);color:#D5A52E;display:flex;align-items:center;justify-content:center;">' +
        iconSvg('checkCircle', 32) +
        '</div>' +
        '<h1 class="heading-emerald">پیش‌نویس سفارش آماده اتصال به درگاه پرداخت</h1>' +
        '<p style="font-size:0.875rem;color:#60412E;">شناسه پیش‌نویس: <strong class="tabular-nums" style="color:#173D30;">' +
        escapeHtml(ord.orderNumber) +
        '</strong></p>' +
        '<p style="font-size:0.75rem;color:#B51F2A;line-height:1.75;max-width:32rem;">توجه: این محیط یک پیش‌نمایش رابط کاربری است و درگاه پرداخت بانکی یا سرور فروشگاه هنوز متصل نشده‌اند. هیچ پرداخت واقعی انجام نشده و این پیش‌نویس صرفاً برای بررسی جریان تسویه‌حساب در حافظه مرورگر ذخیره شده است.</p>' +
        '<div style="width:100%;background-color:rgba(244,232,208,0.65);border-radius:1rem;padding:1.25rem;text-align:right;display:flex;flex-direction:column;gap:0.625rem;font-size:0.875rem;border:1px solid rgba(213,165,46,0.35);">' +
        '<div style="display:flex;justify-content:space-between;"><span style="color:#176D79;">تحویل‌گیرنده:</span><span style="font-weight:600;color:#173D30;">' +
        escapeHtml(ord.recipientName) +
        '</span></div>' +
        '<div style="display:flex;justify-content:space-between;"><span style="color:#176D79;">روش ارسال:</span><span style="color:#173D30;">' +
        escapeHtml(ord.deliveryMethod) +
        '</span></div>' +
        '<div style="display:flex;justify-content:space-between;"><span style="color:#176D79;">روش پرداخت انتخاب‌شده:</span><span style="color:#173D30;">' +
        escapeHtml(ord.paymentMethod) +
        '</span></div>' +
        '<div style="display:flex;justify-content:space-between;padding-top:0.5rem;border-top:1px solid rgba(213,165,46,0.25);"><span style="color:#176D79;">مبلغ پیش‌فاکتور:</span><span class="tabular-nums" style="font-weight:700;color:#173D30;">' +
        formatToman(ord.total) +
        ' تومان</span></div>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem;padding-top:1rem;">' +
        '<button type="button" class="btn-emerald" data-action="nav" data-page="account">مشاهده در تاریخچه پیش‌نویس حساب</button>' +
        '<button type="button" class="btn-outline-emerald" data-action="nav" data-page="shop" data-category="all">بازگشت به فروشگاه</button>' +
        '</div>' +
        '</div></div></div>'
      );
    }

    if (state.cart.length === 0) {
      return (
        '<div class="bg-persian-ivory"><div class="container" style="max-width:36rem;padding-block:5rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem;">' +
        '<h1 class="heading-emerald">سبد خرید شما خالی است</h1>' +
        '<p class="text-muted-walnut" style="font-size:0.875rem;">برای تسویه‌حساب ابتدا محصولی به سبد اضافه کنید.</p>' +
        '<button type="button" class="btn-emerald" data-action="nav" data-page="shop" data-category="all">رفتن به فروشگاه</button>' +
        '</div></div>'
      );
    }

    var subtotal = state.cart.reduce(function (s, i) {
      return s + i.price * i.quantity;
    }, 0);
    var discountAmount =
      state.discountCode.toUpperCase() === 'GOLAB10' ? Math.round(subtotal * 0.1) : 0;
    var shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : BASE_SHIPPING_COST;
    var total = Math.max(0, subtotal - discountAmount + shippingCost);

    var provinceOptions = PROVINCES.map(function (prov) {
      return (
        '<option value="' +
        escapeHtml(prov) +
        '"' +
        (c.province === prov ? ' selected' : '') +
        '>' +
        escapeHtml(prov) +
        '</option>'
      );
    }).join('');

    var deliveryOptions = [
      'پست پیشتاز با بسته‌بندی ضدضربه',
      'پیک ویژه گلابتون (محدوده تهران)',
    ]
      .map(function (method) {
        var selected = c.deliveryMethod === method;
        return (
          '<label class="radio-option-card' +
          (selected ? ' is-selected' : '') +
          '"><input type="radio" name="delivery" value="' +
          escapeHtml(method) +
          '"' +
          (selected ? ' checked' : '') +
          ' style="accent-color:#D5A52E;" /><span>' +
          escapeHtml(method) +
          '</span></label>'
        );
      })
      .join('');

    var paymentOptions = [
      'پرداخت در محل (ویژه پیش‌نمایش)',
      'ثبت پیش‌نویس جهت هماهنگی کارت‌به‌کارت',
    ]
      .map(function (method) {
        var selected = c.paymentMethod === method;
        return (
          '<label class="radio-option-card' +
          (selected ? ' is-selected' : '') +
          '"><input type="radio" name="payment" value="' +
          escapeHtml(method) +
          '"' +
          (selected ? ' checked' : '') +
          ' style="accent-color:#D5A52E;" /><span>' +
          escapeHtml(method) +
          '</span></label>'
        );
      })
      .join('');

    var summaryItemsHtml = state.cart
      .map(function (item) {
        return (
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;font-size:0.875rem;padding-bottom:0.75rem;border-bottom:1px solid rgba(213,165,46,0.25);">' +
          '<div style="min-width:0;">' +
          '<p style="font-weight:600;color:#173D30;">' +
          escapeHtml(item.name) +
          '</p>' +
          '<p style="font-size:0.75rem;color:#176D79;">' +
          escapeHtml(item.variantLabel) +
          ' × ' +
          toPersianDigits(item.quantity) +
          '</p>' +
          '</div>' +
          '<span class="tabular-nums" style="font-weight:600;color:#173D30;white-space:nowrap;">' +
          formatToman(item.price * item.quantity) +
          ' تومان</span>' +
          '</div>'
        );
      })
      .join('');

    return (
      '<div class="bg-persian-ivory"><div class="container page-wrap">' +
      '<div class="page-header-bar"><div><h1 class="heading-emerald">تسویه‌حساب و ثبت سفارش</h1><p class="text-muted-walnut" style="font-size:0.875rem;margin-top:0.25rem;">اطلاعات ارسال و روش تحویل مرسوله را تکمیل کنید</p></div></div>' +
      '<form id="checkout-form" class="checkout-grid">' +
      '<div class="checkout-form-col surface-card surface-card--lg" style="display:flex;flex-direction:column;gap:1.25rem;">' +
      '<h2 style="font-size:1.125rem;font-weight:700;color:#173D30;">اطلاعات گیرنده</h2>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;">' +
      '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">نام و نام خانوادگی <span style="color:#B51F2A;">*</span></label>' +
      '<input type="text" id="chk-fullname" value="' +
      escapeHtml(c.fullName) +
      '" placeholder="نام کامل گیرنده" class="field-input" />' +
      (c.errors.fullName ? '<p class="form-error">' + c.errors.fullName + '</p>' : '') +
      '</div>' +
      '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">شماره موبایل <span style="color:#B51F2A;">*</span></label>' +
      '<input type="tel" dir="ltr" id="chk-mobile" value="' +
      escapeHtml(c.mobile) +
      '" placeholder="09123456789" class="field-input tabular-nums" style="text-align:right;" />' +
      (c.errors.mobile ? '<p class="form-error">' + c.errors.mobile + '</p>' : '') +
      '</div>' +
      '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">استان <span style="color:#B51F2A;">*</span></label>' +
      '<select id="chk-province" class="field-select">' +
      provinceOptions +
      '</select></div>' +
      '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">شهر <span style="color:#B51F2A;">*</span></label>' +
      '<input type="text" id="chk-city" value="' +
      escapeHtml(c.city) +
      '" placeholder="نام شهر" class="field-input" />' +
      (c.errors.city ? '<p class="form-error">' + c.errors.city + '</p>' : '') +
      '</div></div>' +
      '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">نشانی کامل پستی <span style="color:#B51F2A;">*</span></label>' +
      '<textarea rows="2" id="chk-address" placeholder="خیابان، کوچه، پلاک، واحد" class="field-textarea">' +
      escapeHtml(c.address) +
      '</textarea>' +
      (c.errors.address ? '<p class="form-error">' + c.errors.address + '</p>' : '') +
      '</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;">' +
      '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">کد پستی ۱۰ رقمی <span style="color:#B51F2A;">*</span></label>' +
      '<input type="text" dir="ltr" id="chk-postal" value="' +
      escapeHtml(c.postalCode) +
      '" placeholder="1234567890" class="field-input tabular-nums" style="text-align:right;" />' +
      (c.errors.postalCode ? '<p class="form-error">' + c.errors.postalCode + '</p>' : '') +
      '</div>' +
      '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">یادداشت سفارش (اختیاری)</label>' +
      '<input type="text" id="chk-notes" value="' +
      escapeHtml(c.notes) +
      '" placeholder="ساعت ترجیحی تحویل یا نکته بسته‌بندی" class="field-input" /></div>' +
      '</div>' +
      '<div style="padding-top:1rem;border-top:1px solid rgba(213,165,46,0.3);display:flex;flex-direction:column;gap:0.75rem;">' +
      '<h3 style="font-size:0.875rem;font-weight:700;color:#173D30;">روش ارسال</h3>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.75rem;">' +
      deliveryOptions +
      '</div></div>' +
      '<div style="padding-top:1rem;border-top:1px solid rgba(213,165,46,0.3);display:flex;flex-direction:column;gap:0.75rem;">' +
      '<h3 style="font-size:0.875rem;font-weight:700;color:#173D30;">روش پرداخت</h3>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.75rem;">' +
      paymentOptions +
      '</div>' +
      '<p style="font-size:11px;color:#176D79;">توجه: درگاه پرداخت بانکی آنلاین در این محیط پیش‌نمایش متصل نیست؛ ثبت سفارش به صورت پیش‌نویس آزمایشی ذخیره می‌شود.</p>' +
      '</div></div>' +
      '<aside class="checkout-summary-col surface-card surface-card--lg" style="display:flex;flex-direction:column;gap:1.25rem;box-shadow:var(--shadow-sm);">' +
      '<h2 style="font-size:1.125rem;font-weight:700;color:#173D30;">خلاصه سفارش شما</h2>' +
      '<div style="display:flex;flex-direction:column;gap:0.75rem;max-height:18rem;overflow-y:auto;">' +
      summaryItemsHtml +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:0.625rem;font-size:0.875rem;">' +
      '<div style="display:flex;justify-content:space-between;"><span>جمع محصولات</span><span class="tabular-nums">' +
      formatToman(subtotal) +
      ' تومان</span></div>' +
      (discountAmount > 0
        ? '<div style="display:flex;justify-content:space-between;color:#B51F2A;font-weight:500;"><span>تخفیف</span><span class="tabular-nums">-' +
          formatToman(discountAmount) +
          ' تومان</span></div>'
        : '') +
      '<div style="display:flex;justify-content:space-between;"><span>هزینه ارسال</span><span class="tabular-nums">' +
      (shippingCost === 0 ? 'رایگان' : formatToman(shippingCost) + ' تومان') +
      '</span></div>' +
      '<div style="padding-top:0.75rem;border-top:1px solid rgba(213,165,46,0.35);display:flex;justify-content:space-between;align-items:baseline;font-weight:700;color:#173D30;font-size:1rem;">' +
      '<span>مبلغ قابل پرداخت</span><span class="tabular-nums" style="font-size:1.25rem;">' +
      formatToman(total) +
      ' تومان</span></div></div>' +
      '<button type="submit" class="btn-emerald" style="width:100%;padding-block:1rem;">ثبت و پرداخت سفارش</button>' +
      '</aside></form></div></div>'
    );
  }

  function renderAccountPage() {
    if (!state.profile.isAuthenticated) {
      return (
        '<div class="bg-persian-ivory"><div class="container" style="max-width:28rem;padding-block:3.5rem 6rem;">' +
        '<div class="surface-card surface-card--lg" style="display:flex;flex-direction:column;gap:1.5rem;box-shadow:var(--shadow-sm);">' +
        '<div style="text-align:center;"><h1 class="heading-emerald">' +
        (state.authMode === 'login' ? 'ورود به گلابتون شاپ' : 'ساخت حساب کاربری') +
        '</h1><p class="text-muted-walnut" style="font-size:0.75rem;margin-top:0.35rem;">برای مشاهده سفارش‌ها، آدرس‌ها و علاقه‌مندی‌ها وارد شوید</p></div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;padding:0.25rem;border-radius:0.75rem;background-color:#F4E8D0;border:1px solid rgba(213,165,46,0.35);">' +
        '<button type="button" data-action="auth-mode" data-mode="login" style="padding-block:0.5rem;border-radius:0.5rem;font-size:0.75rem;font-weight:600;' +
        (state.authMode === 'login' ? 'background-color:#173D30;color:#F4E8D0;' : 'color:#60412E;') +
        '">ورود</button>' +
        '<button type="button" data-action="auth-mode" data-mode="register" style="padding-block:0.5rem;border-radius:0.5rem;font-size:0.75rem;font-weight:600;' +
        (state.authMode === 'register' ? 'background-color:#173D30;color:#F4E8D0;' : 'color:#60412E;') +
        '">ثبت‌نام</button>' +
        '</div>' +
        '<form id="account-auth-form" style="display:flex;flex-direction:column;gap:1rem;">' +
        (state.authMode === 'register'
          ? '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">نام و نام خانوادگی</label>' +
            '<input type="text" id="auth-name" placeholder="نام کامل شما" required class="field-input" /></div>'
          : '') +
        '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">شماره موبایل</label>' +
        '<input type="tel" dir="ltr" id="auth-mobile" placeholder="09123456789" required class="field-input tabular-nums" style="text-align:right;" /></div>' +
        '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">رمز عبور</label>' +
        '<input type="password" id="auth-password" placeholder="••••••••" required class="field-input" /></div>' +
        '<button type="submit" class="btn-emerald" style="width:100%;">' +
        (state.authMode === 'login' ? 'ورود به پنل کاربری' : 'تکمیل ثبت‌نام') +
        '</button>' +
        '</form></div></div></div>'
      );
    }

    var navTabs = [
      { id: 'orders', label: 'تاریخچه سفارش‌ها', icon: 'package' },
      { id: 'profile', label: 'اطلاعات حساب', icon: 'user' },
      { id: 'addresses', label: 'آدرس‌های ذخیره شده', icon: 'mapPin' },
      { id: 'wishlist', label: 'لیست علاقه‌مندی‌ها', icon: 'heart' },
      { id: 'settings', label: 'تنظیمات', icon: 'settings' },
    ]
      .map(function (tab) {
        return (
          '<button type="button" class="account-nav-btn' +
          (state.accountTab === tab.id ? ' is-active' : '') +
          '" data-action="account-tab" data-tab="' +
          tab.id +
          '">' +
          iconSvg(tab.icon, 16) +
          '<span>' +
          tab.label +
          '</span></button>'
        );
      })
      .join('');

    var mainPanelHtml = '';
    if (state.accountTab === 'orders') {
      if (state.orders.length === 0) {
        mainPanelHtml =
          '<h2 style="font-size:1.25rem;font-weight:700;color:#173D30;">تاریخچه سفارش‌ها</h2>' +
          '<div style="padding-block:2.5rem;text-align:center;display:flex;flex-direction:column;align-items:center;gap:0.75rem;">' +
          '<p class="text-muted-walnut" style="font-size:0.875rem;">هنوز سفارشی ثبت نکرده‌اید.</p>' +
          '<button type="button" class="btn-emerald" data-action="nav" data-page="shop" data-category="all">شروع خرید</button>' +
          '</div>';
      } else {
        mainPanelHtml =
          '<h2 style="font-size:1.25rem;font-weight:700;color:#173D30;">تاریخچه سفارش‌ها</h2>' +
          '<div style="display:flex;flex-direction:column;gap:1rem;">' +
          state.orders
            .map(function (ord) {
              var isExpanded = state.expandedOrderId === ord.id;
              return (
                '<div style="background-color:rgba(244,232,208,0.45);border:1px solid rgba(213,165,46,0.4);border-radius:1rem;padding:1.25rem;display:flex;flex-direction:column;gap:1rem;">' +
                '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;">' +
                '<div><p class="tabular-nums" style="font-size:0.875rem;font-weight:700;color:#173D30;">سفارش ' +
                escapeHtml(ord.orderNumber) +
                '</p><p style="font-size:0.75rem;color:#176D79;margin-top:2px;">' +
                escapeHtml(ord.createdAt) +
                ' · ' +
                escapeHtml(ord.status) +
                '</p></div>' +
                '<div style="display:flex;align-items:center;gap:1rem;">' +
                '<span class="tabular-nums" style="font-size:0.875rem;font-weight:700;color:#173D30;">' +
                formatToman(ord.total) +
                ' تومان</span>' +
                '<button type="button" data-action="toggle-order" data-id="' +
                ord.id +
                '" style="font-size:0.75rem;font-weight:600;color:#B51F2A;">' +
                (isExpanded ? 'بستن جزئیات' : 'مشاهده جزئیات') +
                '</button>' +
                '</div></div>' +
                (isExpanded
                  ? '<div style="padding-top:1rem;border-top:1px solid rgba(213,165,46,0.25);font-size:0.75rem;color:#60412E;display:flex;flex-direction:column;gap:0.5rem;">' +
                    '<p>نشانی ارسال: ' +
                    escapeHtml(ord.addressSummary) +
                    '</p><p>روش ارسال: ' +
                    escapeHtml(ord.deliveryMethod) +
                    '</p>' +
                    ord.items
                      .map(function (it) {
                        return (
                          '<div style="display:flex;justify-content:space-between;"><span>' +
                          escapeHtml(it.name) +
                          ' (' +
                          escapeHtml(it.variantLabel) +
                          ') × ' +
                          toPersianDigits(it.quantity) +
                          '</span><span class="tabular-nums">' +
                          formatToman(it.price * it.quantity) +
                          ' تومان</span></div>'
                        );
                      })
                      .join('') +
                    '</div>'
                  : '') +
                '</div>'
              );
            })
            .join('') +
          '</div>';
      }
    } else if (state.accountTab === 'profile') {
      mainPanelHtml =
        '<form id="account-profile-form" style="display:flex;flex-direction:column;gap:1.25rem;max-width:34rem;">' +
        '<h2 style="font-size:1.25rem;font-weight:700;color:#173D30;">اطلاعات حساب کاربری</h2>' +
        '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">نام و نام خانوادگی</label>' +
        '<input type="text" id="prof-fullname" value="' +
        escapeHtml(state.profile.fullName) +
        '" class="field-input" /></div>' +
        '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">شماره موبایل</label>' +
        '<input type="tel" dir="ltr" id="prof-mobile" value="' +
        escapeHtml(state.profile.mobile) +
        '" class="field-input tabular-nums" style="text-align:right;" /></div>' +
        '<div><label style="display:block;font-size:0.75rem;font-weight:600;color:#173D30;margin-bottom:0.35rem;">ایمیل</label>' +
        '<input type="email" dir="ltr" id="prof-email" value="' +
        escapeHtml(state.profile.email) +
        '" class="field-input" style="text-align:right;" /></div>' +
        '<div><button type="submit" class="btn-emerald">ذخیره اطلاعات</button></div>' +
        (state.accountSavedNotice
          ? '<p style="font-size:0.75rem;color:#173D30;font-weight:600;">' +
            escapeHtml(state.accountSavedNotice) +
            '</p>'
          : '') +
        '</form>';
    } else if (state.accountTab === 'addresses') {
      var addrForm = state.showAddressForm
        ? '<form id="account-address-form" style="padding:1.25rem;background-color:rgba(244,232,208,0.55);border:1px solid rgba(213,165,46,0.45);border-radius:1rem;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">' +
          '<input type="text" id="addr-title" placeholder="عنوان آدرس (مثلاً خانه)" required class="field-input" style="background-color:#FBF6EB;" />' +
          '<select id="addr-province" class="field-select" style="background-color:#FBF6EB;">' +
          PROVINCES.map(function (p) {
            return '<option value="' + escapeHtml(p) + '">' + escapeHtml(p) + '</option>';
          }).join('') +
          '</select>' +
          '<input type="text" id="addr-city" placeholder="شهر" required class="field-input" style="background-color:#FBF6EB;" />' +
          '<input type="text" id="addr-postal" placeholder="کد پستی" class="field-input tabular-nums" style="background-color:#FBF6EB;" />' +
          '<input type="text" id="addr-full" placeholder="نشانی کامل" required class="field-input" style="grid-column:1/-1;background-color:#FBF6EB;" />' +
          '<button type="submit" class="btn-emerald" style="grid-column:1/-1;">ثبت آدرس</button>' +
          '</form>'
        : '';

      var addrCards = state.addresses
        .map(function (addr) {
          return (
            '<div style="background-color:rgba(244,232,208,0.45);border:1px solid rgba(213,165,46,0.4);border-radius:1rem;padding:1.25rem;display:flex;flex-direction:column;gap:0.5rem;">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;">' +
            '<h3 style="font-size:0.875rem;font-weight:700;color:#173D30;">' +
            escapeHtml(addr.title) +
            '</h3>' +
            '<button type="button" data-action="delete-address" data-id="' +
            addr.id +
            '" aria-label="حذف آدرس" style="color:rgba(96,65,46,0.6);">' +
            iconSvg('trash', 16) +
            '</button></div>' +
            '<p style="font-size:0.75rem;color:rgba(96,65,46,0.85);line-height:1.6;">' +
            escapeHtml(addr.province) +
            '، ' +
            escapeHtml(addr.city) +
            '، ' +
            escapeHtml(addr.address) +
            '</p>' +
            '<p class="tabular-nums" style="font-size:0.75rem;color:#176D79;">کد پستی: ' +
            escapeHtml(addr.postalCode) +
            '</p></div>'
          );
        })
        .join('');

      mainPanelHtml =
        '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">' +
        '<h2 style="font-size:1.25rem;font-weight:700;color:#173D30;">آدرس‌های ذخیره شده</h2>' +
        '<button type="button" class="btn-emerald" style="padding:0.5rem 1rem;font-size:0.75rem;" data-action="toggle-address-form">' +
        iconSvg('plus', 16) +
        '<span>افزودن آدرس جدید</span></button></div>' +
        addrForm +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">' +
        addrCards +
        '</div>';
    } else if (state.accountTab === 'wishlist') {
      var wishlisted = PRODUCTS.filter(function (p) {
        return state.wishlist.indexOf(p.id) > -1;
      });
      mainPanelHtml =
        '<h2 style="font-size:1.25rem;font-weight:700;color:#173D30;">لیست علاقه‌مندی‌ها</h2>' +
        (wishlisted.length === 0
          ? '<p class="text-muted-walnut" style="font-size:0.875rem;padding-block:2rem;">هنوز محصولی به لیست علاقه‌مندی‌های خود اضافه نکرده‌اید.</p>'
          : '<div class="products-grid-3">' + wishlisted.map(renderProductCard).join('') + '</div>');
    } else {
      mainPanelHtml =
        '<div style="display:flex;flex-direction:column;gap:1rem;max-width:32rem;">' +
        '<h2 style="font-size:1.25rem;font-weight:700;color:#173D30;">تنظیمات اعلان و حساب</h2>' +
        '<label style="display:flex;align-items:center;justify-content:space-between;padding:1rem;border-radius:1rem;background-color:rgba(244,232,208,0.45);border:1px solid rgba(213,165,46,0.35);cursor:pointer;"><span style="font-size:0.875rem;color:#173D30;">اطلاع‌رسانی محصولات فصلی جدید</span><input type="checkbox" checked style="width:1rem;height:1rem;accent-color:#173D30;" /></label>' +
        '<label style="display:flex;align-items:center;justify-content:space-between;padding:1rem;border-radius:1rem;background-color:rgba(244,232,208,0.45);border:1px solid rgba(213,165,46,0.35);cursor:pointer;"><span style="font-size:0.875rem;color:#173D30;">ارسال پیامک وضعیت آماده‌سازی سفارش</span><input type="checkbox" checked style="width:1rem;height:1rem;accent-color:#173D30;" /></label>' +
        '</div>';
    }

    return (
      '<div class="bg-persian-ivory"><div class="container page-wrap">' +
      '<div class="account-grid">' +
      '<aside class="account-sidebar-col bg-royal-persian" style="color:#F4E8D0;border:1px solid rgba(213,165,46,0.5);border-radius:1.5rem;padding:1.5rem;display:flex;flex-direction:column;gap:1.5rem;">' +
      '<div style="padding-bottom:1.25rem;border-bottom:1px solid rgba(213,165,46,0.35);">' +
      '<p class="eyebrow-gold">خوش آمدید</p>' +
      '<h1 style="font-size:1.125rem;font-weight:700;margin-top:2px;">' +
      escapeHtml(state.profile.fullName) +
      '</h1>' +
      '<p class="tabular-nums" style="font-size:0.75rem;color:rgba(230,210,165,0.8);margin-top:4px;">' +
      escapeHtml(state.profile.mobile) +
      '</p></div>' +
      '<nav style="display:flex;flex-direction:column;gap:0.375rem;">' +
      navTabs +
      '</nav>' +
      '<button type="button" data-action="account-logout" style="width:100%;display:flex;align-items:center;gap:0.625rem;padding:0.625rem 1rem;border-radius:0.75rem;font-size:0.75rem;font-weight:500;color:#E6D2A5;border:1px solid rgba(213,165,46,0.4);">' +
      iconSvg('logOut', 16) +
      '<span>خروج از حساب</span></button>' +
      '</aside>' +
      '<div class="account-main-col surface-card surface-card--lg" style="display:flex;flex-direction:column;gap:1.5rem;">' +
      mainPanelHtml +
      '</div></div></div></div>'
    );
  }

  function renderAboutPage() {
    var pillars = [
      { num: '۰۱', title: 'اصالت ایرانی', desc: 'الهام‌گرفته از فرهنگ، هنر و ذائقه اصیل ایرانی.' },
      { num: '۰۲', title: 'توجه به کیفیت', desc: 'دقت در انتخاب مواد اولیه تازه و جزئیات آماده‌سازی.' },
      { num: '۰۳', title: 'عشق به طعم‌های خانگی', desc: 'اهمیت دادن به حس گرم، صمیمی و خاطره‌انگیز خوراکی‌های خانگی.' },
      { num: '۰۴', title: 'زیبایی در جزئیات', desc: 'احترام به هنر بسته‌بندی شیشه‌ای و تجربه خرید دلنشین.' },
    ]
      .map(function (item) {
        return (
          '<div style="background-color:rgba(16,13,11,0.55);border:1px solid rgba(213,165,46,0.45);border-radius:1rem;padding:1.5rem;display:flex;flex-direction:column;gap:0.625rem;">' +
          '<span class="eyebrow-gold tabular-nums">' +
          item.num +
          '</span>' +
          '<h3 style="font-size:1.125rem;font-weight:700;color:#F4E8D0;">' +
          item.title +
          '</h3>' +
          '<p style="font-size:0.875rem;color:rgba(230,210,165,0.85);line-height:1.65;">' +
          item.desc +
          '</p></div>'
        );
      })
      .join('');

    var worldCards = CATEGORIES.map(function (cat) {
      return (
        '<button type="button" class="about-world-card" data-action="nav" data-page="shop" data-category="' +
        cat.slug +
        '">' +
        brandImgHtml(cat.image, cat.title, false) +
        '<div class="about-world-card__overlay"></div>' +
        '<div style="position:absolute;bottom:1rem;inset-inline:1rem;color:#F4E8D0;">' +
        '<p style="font-size:1rem;font-weight:700;color:#D5A52E;">' +
        escapeHtml(cat.title) +
        '</p>' +
        '<p style="font-size:0.75rem;color:rgba(230,210,165,0.9);margin-top:2px;">' +
        escapeHtml(cat.description) +
        '</p>' +
        '</div></button>'
      );
    }).join('');

    return (
      '<div class="bg-persian-ivory" style="padding-bottom:6rem;display:flex;flex-direction:column;gap:5rem;">' +
      '<section class="about-hero bg-rose-garden">' +
      '<div class="about-hero__bg">' +
      brandImgHtml(IMAGE_ASSETS.brandStory, 'آشپزخانه سنتی ایرانی با شیشه‌های مربا، ترشی و گلبرگ‌های گل محمدی', true) +
      '</div>' +
      '<div class="about-hero__overlay"></div>' +
      '<div class="container" style="position:relative;z-index:10;padding-block:4rem;width:100%;">' +
      '<div style="max-width:42rem;display:flex;flex-direction:column;gap:1.5rem;color:#F4E8D0;">' +
      '<div style="display:flex;align-items:center;gap:1rem;">' +
      officialLogoHtml('lg') +
      '<div><p class="eyebrow-gold">عطر اصالت، طعم خونه</p><p class="font-latin-serif" style="font-size:0.75rem;letter-spacing:0.22em;color:#E6D2A5;text-transform:uppercase;margin-top:4px;">GOLABTOON SHOP</p></div>' +
      '</div>' +
      '<h1 class="hero-title">گلابتون؛ روایت اصالت، هنر و طعم‌های ماندگار</h1>' +
      '<p class="hero-subtitle">بعضی طعم‌ها فقط یک مزه نیستند؛ خاطره‌ای هستند که همیشه در دل ما زنده می‌مانند.</p>' +
      '<div><button type="button" class="btn-gold" data-action="scroll-story">با داستان ما آشنا شوید</button></div>' +
      '</div></div></section>' +
      '<section id="golabtoon-story" class="container about-story-grid">' +
      '<div class="about-col-6" style="display:flex;flex-direction:column;gap:1.25rem;">' +
      '<p class="eyebrow-crimson">از عشق به طعم‌های اصیل</p>' +
      '<h2 class="heading-emerald">هر طعم، قصه‌ای از خانه و خاطره</h2>' +
      '<p style="font-size:1rem;color:#60412E;line-height:1.9;">گلابتون شاپ با الهام از زیبایی فرهنگ غذایی ایران و عشق به طعم‌های اصیل شکل گرفته است. ما به زیبایی لحظه‌های ساده، عطر گیاهان خوشبو و لذت خوراکی‌های دوست‌داشتنی ایرانی باور داریم.</p>' +
      '<p class="eyebrow-turquoise" style="font-weight:400;">اطلاعات تکمیلی و تاریخچه اختصاصی مجموعه شما در این بخش به سادگی قابل ویرایش است.</p>' +
      '</div>' +
      '<div class="about-col-6"><div style="padding:0.625rem;border-radius:1.5rem;border:1px solid rgba(213,165,46,0.55);background-color:#173D30;box-shadow:var(--shadow-xl);"><div style="aspect-ratio:16/10;border-radius:1rem;overflow:hidden;">' +
      brandImgHtml(IMAGE_ASSETS.heroTable, 'آماده‌سازی خوراکی‌های سنتی و خانگی روی میز چوبی', false) +
      '</div></div></div></section>' +
      '<section class="bg-royal-tilework" style="color:#F4E8D0;border-block:2px solid rgba(213,165,46,0.45);padding-block:4rem;">' +
      '<div class="container" style="display:flex;flex-direction:column;gap:2.5rem;">' +
      '<div style="text-align:center;max-width:42rem;margin-inline:auto;">' +
      persianDividerHtml(true) +
      '<h2 class="heading-ivory" style="margin-top:0.5rem;">ما به سادگیِ طعم‌های اصیل باور داریم</h2></div>' +
      '<div class="values-grid">' +
      pillars +
      '</div></div></section>' +
      '<section class="container" style="display:flex;flex-direction:column;gap:2rem;">' +
      '<div style="text-align:center;"><p class="eyebrow-turquoise">دنیای محصولات گلابتون</p><h2 class="heading-emerald" style="margin-top:0.35rem;">گنجینه‌ای از طعم‌های خانگی و سنتی</h2></div>' +
      '<div class="products-grid-3">' +
      worldCards +
      '</div></section>' +
      '<section class="container"><div class="bg-royal-persian about-story-grid" style="color:#F4E8D0;border:2px solid rgba(213,165,46,0.55);border-radius:1.5rem;padding:2.5rem;">' +
      '<div class="about-col-7" style="display:flex;flex-direction:column;gap:1.25rem;align-items:flex-start;">' +
      officialLogoHtml('md') +
      '<h2 class="heading-ivory">گلابتون، همراه سفره‌های گرم شما</h2>' +
      '<p style="font-size:1rem;color:rgba(230,210,165,0.9);line-height:1.9;">خوشحالیم که بخشی از لحظه‌های خوش و سفره‌های گرم شما هستیم. امیدواریم هر انتخاب از گلابتون، یادآور طعم‌های دوست‌داشتنی و حس خوب خانه باشد.</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:0.75rem;">' +
      '<button type="button" class="btn-gold" data-action="nav" data-page="shop" data-category="all">مشاهده محصولات</button>' +
      '<button type="button" class="btn-outline-gold" data-action="nav" data-page="contact">ارتباط با ما</button>' +
      '</div></div>' +
      '<div class="about-col-5"><div style="aspect-ratio:4/3;border-radius:1rem;overflow:hidden;border:1px solid rgba(213,165,46,0.5);">' +
      brandImgHtml(IMAGE_ASSETS.jams, 'شیشه‌های مربا و رب انار گلابتون شاپ', false) +
      '</div></div></div></section></div>'
    );
  }

  function renderContactPage() {
    return (
      '<div class="bg-persian-ivory"><div class="container page-wrap" style="display:flex;flex-direction:column;gap:3rem;">' +
      '<div class="page-header-bar" style="margin-bottom:0;"><div><h1 class="heading-emerald">تماس با گلابتون شاپ</h1><p class="text-muted-walnut" style="font-size:0.875rem;margin-top:0.35rem;">برای سفارش‌های مناسبتی، همکاری یا پرسش درباره محصولات با ما در ارتباط باشید</p></div></div>' +
      '<div class="contact-grid">' +
      '<div class="contact-info-col bg-royal-persian" style="color:#F4E8D0;border:1px solid rgba(213,165,46,0.5);border-radius:1.5rem;padding:2rem;display:flex;flex-direction:column;gap:1.5rem;">' +
      '<h2 style="font-size:1.25rem;font-weight:700;color:#D5A52E;">اطلاعات تماس (قابل ویرایش)</h2>' +
      '<div style="display:flex;flex-direction:column;gap:1rem;font-size:0.875rem;color:rgba(230,210,165,0.9);">' +
      '<div style="display:flex;gap:0.75rem;"><span style="color:#D5A52E;">' +
      iconSvg('phone', 16) +
      '</span><div><p style="font-weight:600;color:#F4E8D0;">شماره تماس</p><p class="tabular-nums">۰۲۱-۰۰۰۰۰۰۰۰</p></div></div>' +
      '<div style="display:flex;gap:0.75rem;"><span style="color:#D5A52E;">' +
      iconSvg('mail', 16) +
      '</span><div><p style="font-weight:600;color:#F4E8D0;">پست الکترونیک</p><p>hello@golabtoonshop.example</p></div></div>' +
      '<div style="display:flex;gap:0.75rem;"><span style="color:#D5A52E;">' +
      iconSvg('mapPin', 16) +
      '</span><div><p style="font-weight:600;color:#F4E8D0;">نشانی</p><p>تهران — نشانی قابل ویرایش توسط مدیر فروشگاه</p></div></div>' +
      '<div style="display:flex;gap:0.75rem;"><span style="color:#D5A52E;">' +
      iconSvg('clock', 16) +
      '</span><div><p style="font-weight:600;color:#F4E8D0;">ساعات پاسخگویی</p><p>شنبه تا پنج‌شنبه، ۹ صبح تا ۶ عصر (قابل ویرایش)</p></div></div>' +
      '<div style="display:flex;gap:0.75rem;"><span style="color:#D5A52E;">' +
      iconSvg('instagram', 16) +
      '</span><div><p style="font-weight:600;color:#F4E8D0;">اینستاگرام</p><p dir="ltr">@golabtoon.shop</p></div></div>' +
      '</div></div>' +
      '<form id="contact-form" class="contact-form-col surface-card surface-card--lg" style="display:flex;flex-direction:column;gap:1rem;">' +
      '<h2 style="font-size:1.25rem;font-weight:700;color:#173D30;">ارسال پیام مستقیم</h2>' +
      (state.contactSubmitted
        ? '<div style="padding:1rem;border-radius:0.75rem;background-color:#173D30;color:#F4E8D0;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;border:1px solid rgba(213,165,46,0.4);">' +
          '<span style="color:#D5A52E;">' +
          iconSvg('checkCircle', 16) +
          '</span><span>پیام شما ثبت شد. همکاران ما در اولین فرصت با شما تماس می‌گیرند.</span></div>'
        : '') +
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">' +
      '<input type="text" id="cnt-name" placeholder="نام و نام خانوادگی *" required class="field-input" />' +
      '<input type="tel" id="cnt-phone" placeholder="شماره تماس" class="field-input" />' +
      '<input type="email" id="cnt-email" placeholder="ایمیل" class="field-input" />' +
      '<input type="text" id="cnt-subject" placeholder="موضوع پیام" class="field-input" />' +
      '</div>' +
      '<textarea rows="4" id="cnt-message" placeholder="متن پیام شما *" required class="field-textarea"></textarea>' +
      '<div><button type="submit" class="btn-emerald">ارسال پیام</button></div>' +
      '</form></div></div></div>'
    );
  }

  function renderFaqPage() {
    var itemsHtml = FAQ_ITEMS.map(function (item) {
      var isOpen = state.faqOpenId === item.id;
      return (
        '<div class="faq-item">' +
        '<button type="button" class="faq-item__trigger" data-action="faq-toggle" data-id="' +
        item.id +
        '">' +
        '<div><span class="eyebrow-turquoise" style="display:block;font-size:11px;margin-bottom:2px;">' +
        escapeHtml(item.group) +
        '</span><span style="font-size:0.95rem;font-weight:700;color:#173D30;">' +
        escapeHtml(item.question) +
        '</span></div>' +
        '<span style="color:#173D30;transform:' +
        (isOpen ? 'rotate(180deg)' : 'rotate(0deg)') +
        ';transition:transform 0.2s ease;">' +
        iconSvg('chevronDown', 20) +
        '</span></button>' +
        (isOpen ? '<div class="faq-item__answer">' + escapeHtml(item.answer) + '</div>' : '') +
        '</div>'
      );
    }).join('');

    return (
      '<div class="bg-persian-ivory"><div class="container page-wrap" style="max-width:48rem;display:flex;flex-direction:column;gap:2.5rem;">' +
      '<div style="text-align:center;">' +
      persianDividerHtml(false) +
      '<h1 class="heading-emerald" style="margin-top:0.5rem;">سوالات متداول</h1>' +
      '<p class="text-muted-walnut" style="font-size:0.875rem;margin-top:0.35rem;">پاسخ پرسش‌های رایج درباره ثبت سفارش، بسته‌بندی، ارسال و نگهداری محصولات</p>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:0.75rem;">' +
      itemsHtml +
      '</div>' +
      '<div style="text-align:center;display:flex;flex-direction:column;align-items:center;gap:0.75rem;padding-top:1rem;">' +
      '<p class="text-muted-walnut" style="font-size:0.875rem;">پاسخ سوال خود را پیدا نکردید؟</p>' +
      '<button type="button" class="btn-emerald" data-action="nav" data-page="contact">ارتباط با پشتیبانی</button>' +
      '</div></div></div>'
    );
  }

  // =========================================================================
  // Overlays & Toast
  // =========================================================================
  function renderSearchResultsBody() {
    var trimmed = state.searchQuery.trim();
    if (!trimmed) {
      var recentChips = state.recentSearches
        .map(function (term) {
          return (
            '<button type="button" data-action="choose-search-term" data-term="' +
            escapeHtml(term) +
            '" style="padding:0.375rem 0.75rem;border-radius:0.5rem;background-color:rgba(230,210,165,0.6);font-size:0.75rem;font-weight:600;color:#173D30;border:1px solid rgba(213,165,46,0.3);">' +
            escapeHtml(term) +
            '</button>'
          );
        })
        .join('');

      var popCats = CATEGORIES.map(function (cat) {
        return (
          '<button type="button" data-action="search-cat" data-category="' +
          cat.slug +
          '" style="display:flex;align-items:center;gap:0.625rem;padding:0.5rem;border-radius:0.75rem;border:1px solid rgba(213,165,46,0.35);text-align:right;">' +
          '<div style="width:2.5rem;height:2.5rem;border-radius:0.5rem;overflow:hidden;flex-shrink:0;">' +
          brandImgHtml(cat.image, cat.title, false) +
          '</div>' +
          '<span style="font-size:0.75rem;font-weight:600;color:#173D30;">' +
          escapeHtml(cat.shortTitle) +
          '</span></button>'
        );
      }).join('');

      return (
        '<div style="display:flex;flex-direction:column;gap:1.5rem;">' +
        '<div><h4 class="eyebrow-turquoise" style="margin-bottom:0.75rem;">جستجوهای اخیر</h4><div style="display:flex;flex-wrap:wrap;gap:0.5rem;">' +
        recentChips +
        '</div></div>' +
        '<div><h4 class="eyebrow-turquoise" style="margin-bottom:0.75rem;">دسته‌بندی‌های محبوب</h4><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:0.625rem;">' +
        popCats +
        '</div></div></div>'
      );
    }

    var matches = PRODUCTS.filter(function (p) {
      return (
        p.name.indexOf(trimmed) > -1 ||
        p.categoryLabel.indexOf(trimmed) > -1 ||
        p.shortDescription.indexOf(trimmed) > -1
      );
    });

    if (matches.length === 0) {
      return (
        '<div style="padding-block:2.5rem;text-align:center;">' +
        '<p style="font-size:0.875rem;font-weight:600;color:#173D30;">محصولی با عبارت «' +
        escapeHtml(trimmed) +
        '» پیدا نشد.</p>' +
        '<p class="text-muted-walnut" style="font-size:0.75rem;margin-top:0.5rem;">می‌توانید نام دسته‌بندی‌هایی مثل عرق، ترشی، مربا یا شربت را امتحان کنید.</p>' +
        '</div>'
      );
    }

    return (
      '<div style="display:flex;flex-direction:column;gap:0.5rem;">' +
      '<p class="eyebrow-turquoise" style="margin-bottom:0.5rem;">نتایج یافت‌شده</p>' +
      matches
        .map(function (p) {
          return (
            '<button type="button" data-action="search-select-product" data-id="' +
            p.id +
            '" style="width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:0.625rem;border-radius:0.75rem;text-align:right;">' +
            '<div style="display:flex;align-items:center;gap:0.75rem;min-width:0;">' +
            '<div style="width:3.5rem;height:3rem;border-radius:0.5rem;overflow:hidden;flex-shrink:0;border:1px solid rgba(213,165,46,0.3);">' +
            brandImgHtml(p.image, p.name, false) +
            '</div>' +
            '<div style="min-width:0;">' +
            '<p style="font-size:0.875rem;font-weight:700;color:#173D30;">' +
            escapeHtml(p.name) +
            '</p>' +
            '<p style="font-size:0.75rem;color:#176D79;">' +
            escapeHtml(p.categoryLabel) +
            ' · ' +
            escapeHtml(p.weight) +
            '</p>' +
            '</div></div>' +
            '<div style="display:flex;align-items:center;gap:0.5rem;flex-shrink:0;">' +
            '<span class="tabular-nums" style="font-size:0.875rem;font-weight:700;color:#173D30;">' +
            formatToman(p.price) +
            ' تومان</span>' +
            '<span style="color:#D5A52E;">' +
            iconSvg('arrowLeft', 16) +
            '</span>' +
            '</div></button>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function renderOverlays() {
    var root = document.getElementById('app-overlays');
    if (!root) return;
    var html = '';

    // 1. Mobile Slide-Out Menu Drawer
    if (state.mobileMenuOpen) {
      var drawerLinks = [
        { label: 'صفحه اصلی', page: 'home' },
        { label: 'فروشگاه محصولات', page: 'shop' },
        { label: 'قصه گلابتون (درباره ما)', page: 'about' },
        { label: 'سوالات متداول', page: 'faq' },
        { label: 'تماس با ما', page: 'contact' },
        { label: 'سبد خرید', page: 'cart' },
        { label: 'حساب کاربری', page: 'account' },
      ]
        .map(function (it) {
          var active = state.page === it.page;
          return (
            '<button type="button" data-action="nav" data-page="' +
            it.page +
            '" data-category="all" style="width:100%;text-align:right;padding:0.75rem;border-radius:0.5rem;font-size:0.875rem;' +
            (active
              ? 'background-color:#D5A52E;color:#100D0B;font-weight:700;'
              : 'color:#E6D2A5;font-weight:500;') +
            '">' +
            it.label +
            '</button>'
          );
        })
        .join('');

      var drawerCats = CATEGORIES.map(function (cat) {
        return (
          '<button type="button" data-action="nav" data-page="shop" data-category="' +
          cat.slug +
          '" style="text-align:right;padding:0.625rem;border-radius:0.5rem;background-color:rgba(16,13,11,0.4);border:1px solid rgba(213,165,46,0.25);font-size:0.75rem;font-weight:500;color:#F4E8D0;">' +
          escapeHtml(cat.shortTitle) +
          '</button>'
        );
      }).join('');

      html +=
        '<div class="drawer-container">' +
        '<div class="overlay-backdrop" data-action="close-overlays"></div>' +
        '<aside class="drawer-panel drawer-panel--emerald">' +
        '<div style="padding:1.25rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(213,165,46,0.3);">' +
        '<button type="button" data-action="nav" data-page="home" style="display:flex;align-items:center;gap:0.75rem;">' +
        officialLogoHtml('xs') +
        '<span class="font-display-fa" style="font-size:1.25rem;color:#F4E8D0;">گلابتون شاپ</span>' +
        '</button>' +
        '<button type="button" data-action="close-overlays" aria-label="بستن منو" style="width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;color:#E6D2A5;">' +
        iconSvg('x', 20) +
        '</button>' +
        '</div>' +
        '<div style="flex:1;overflow-y:auto;padding:1.25rem;display:flex;flex-direction:column;gap:1.5rem;">' +
        '<div style="display:flex;flex-direction:column;gap:0.25rem;">' +
        '<p class="eyebrow-gold" style="margin-bottom:0.5rem;">مسیرهای اصلی</p>' +
        drawerLinks +
        '</div>' +
        '<div style="padding-top:1rem;border-top:1px solid rgba(213,165,46,0.25);">' +
        '<p class="eyebrow-gold" style="margin-bottom:0.75rem;">دسته‌بندی‌ها</p>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">' +
        drawerCats +
        '</div></div></div></aside></div>';
    }

    // 2. Mobile Shop Filters Drawer
    if (state.mobileFiltersOpen) {
      html +=
        '<div class="drawer-container">' +
        '<div class="overlay-backdrop" data-action="close-overlays"></div>' +
        '<aside class="drawer-panel drawer-panel--ivory">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:1px solid rgba(213,165,46,0.35);">' +
        '<h2 style="font-size:1rem;font-weight:700;color:#173D30;">فیلتر محصولات</h2>' +
        '<button type="button" data-action="close-overlays" style="width:2.25rem;height:2.25rem;display:flex;align-items:center;justify-content:center;">' +
        iconSvg('x', 20) +
        '</button></div>' +
        renderFilterControlsHtml() +
        '</aside></div>';
    }

    // 3. Search Overlay
    if (state.searchOpen) {
      html +=
        '<div class="search-modal-wrap" role="dialog" aria-modal="true" aria-label="جستجو در فروشگاه گلابتون">' +
        '<div class="overlay-backdrop" data-action="close-overlays"></div>' +
        '<div class="search-modal">' +
        '<div style="padding:1.125rem;border-bottom:1px solid rgba(213,165,46,0.35);display:flex;align-items:center;gap:0.75rem;">' +
        '<span style="color:#176D79;">' +
        iconSvg('search', 20) +
        '</span>' +
        '<input type="text" id="overlay-search-input" value="' +
        escapeHtml(state.searchQuery) +
        '" placeholder="دنبال چه طعمی می‌گردید؟" style="width:100%;background:transparent;border:0;color:#173D30;font-size:0.95rem;outline:none;" />' +
        (state.searchQuery
          ? '<button type="button" data-action="clear-search" style="font-size:0.75rem;color:#176D79;padding:0.25rem 0.5rem;white-space:nowrap;">پاک کردن</button>'
          : '') +
        '<button type="button" data-action="close-overlays" aria-label="بستن جستجو" style="width:2.25rem;height:2.25rem;display:flex;align-items:center;justify-content:center;color:#60412E;flex-shrink:0;">' +
        iconSvg('x', 16) +
        '</button></div>' +
        '<div id="overlay-search-body" style="padding:1.25rem;max-height:70vh;overflow-y:auto;">' +
        renderSearchResultsBody() +
        '</div></div></div>';
    }

    // 4. Recipe Modal
    if (state.activeRecipeId) {
      var recipe = RECIPES.find(function (r) {
        return r.id === state.activeRecipeId;
      });
      if (recipe) {
        html +=
          '<div class="recipe-modal-wrap" role="dialog" aria-modal="true">' +
          '<div class="overlay-backdrop" data-action="close-overlays"></div>' +
          '<article class="recipe-modal">' +
          '<div style="position:relative;aspect-ratio:16/9;">' +
          brandImgHtml(recipe.image, recipe.title, true) +
          '<button type="button" data-action="close-overlays" aria-label="بستن مطلب" style="position:absolute;top:1rem;left:1rem;width:2.5rem;height:2.5rem;border-radius:999px;background-color:#173D30;color:#F4E8D0;border:1px solid rgba(213,165,46,0.6);display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-md);">' +
          iconSvg('x', 20) +
          '</button></div>' +
          '<div style="padding:1.75rem;display:flex;flex-direction:column;gap:1.25rem;">' +
          '<div><p class="eyebrow-turquoise" style="margin-bottom:0.35rem;">' +
          escapeHtml(recipe.category) +
          ' · ' +
          escapeHtml(recipe.readingTime) +
          '</p><h2 class="heading-emerald">' +
          escapeHtml(recipe.title) +
          '</h2></div>' +
          '<p style="font-size:0.95rem;color:#60412E;line-height:1.75;">' +
          escapeHtml(recipe.excerpt) +
          '</p>' +
          '<div><h3 style="font-size:0.875rem;font-weight:700;color:#173D30;margin-bottom:0.5rem;">مواد پیشنهادی:</h3>' +
          '<ul style="list-style:disc inside;display:flex;flex-direction:column;gap:0.375rem;font-size:0.875rem;color:#60412E;">' +
          recipe.ingredients
            .map(function (i) {
              return '<li>' + escapeHtml(i) + '</li>';
            })
            .join('') +
          '</ul></div>' +
          '<div><h3 style="font-size:0.875rem;font-weight:700;color:#173D30;margin-bottom:0.5rem;">نکات سرو و آماده‌سازی:</h3>' +
          '<ol style="list-style:decimal inside;display:flex;flex-direction:column;gap:0.5rem;font-size:0.875rem;color:#60412E;line-height:1.7;">' +
          recipe.steps
            .map(function (s) {
              return '<li>' + escapeHtml(s) + '</li>';
            })
            .join('') +
          '</ol></div>' +
          '<div style="padding-top:0.75rem;border-top:1px solid rgba(213,165,46,0.3);display:flex;justify-content:flex-end;">' +
          '<button type="button" class="btn-emerald" data-action="recipe-explore" data-category="' +
          recipe.relatedCategory +
          '">مشاهده محصولات مرتبط</button>' +
          '</div></div></article></div>';
      }
    }

    root.innerHTML = html;

    if (state.searchOpen) {
      var input = document.getElementById('overlay-search-input');
      if (input) {
        window.setTimeout(function () {
          input.focus();
        }, 40);
      }
    }
  }

  function renderToast() {
    var root = document.getElementById('app-toast');
    if (!root) return;
    if (!state.toastMessage) {
      root.innerHTML = '';
      return;
    }
    root.innerHTML =
      '<div role="status" class="toast-banner">' +
      '<span>' +
      escapeHtml(state.toastMessage) +
      '</span>' +
      '<button type="button" data-action="nav" data-page="cart" style="font-size:0.75rem;text-decoration:underline;text-underline-offset:4px;color:#D5A52E;">سبد خرید</button>' +
      '</div>';
  }

  function renderMain() {
    var root = document.getElementById('app-main');
    if (!root) return;
    if (state.page === 'home') root.innerHTML = renderHomePage();
    else if (state.page === 'shop') root.innerHTML = renderShopPage();
    else if (state.page === 'product') root.innerHTML = renderProductDetailPage();
    else if (state.page === 'cart') root.innerHTML = renderCartPage();
    else if (state.page === 'checkout') root.innerHTML = renderCheckoutPage();
    else if (state.page === 'account') root.innerHTML = renderAccountPage();
    else if (state.page === 'about') root.innerHTML = renderAboutPage();
    else if (state.page === 'contact') root.innerHTML = renderContactPage();
    else if (state.page === 'faq') root.innerHTML = renderFaqPage();
    else root.innerHTML = renderHomePage();
  }

  function renderAll() {
    renderAnnouncement();
    renderHeader();
    renderMain();
    renderFooter();
    renderMobileNav();
    renderOverlays();
    renderToast();
  }

  // =========================================================================
  // Event Delegation (Click, Input, Change, Submit, Keydown)
  // =========================================================================
  document.addEventListener('click', function (e) {
    var target = e.target.closest('[data-action]');
    if (!target) return;
    var action = target.getAttribute('data-action');

    if (action === 'close-announcement') {
      state.showAnnouncement = false;
      renderAnnouncement();
    } else if (action === 'nav') {
      var page = target.getAttribute('data-page') || 'home';
      var cat = target.getAttribute('data-category');
      var accTab = target.getAttribute('data-account-tab');
      if (accTab) state.accountTab = accTab;
      navigateTo(page, cat || undefined);
    } else if (action === 'select-product') {
      var pid = target.getAttribute('data-id');
      if (pid) {
        selectProductState(pid, true);
        renderAll();
      }
    } else if (action === 'quick-add') {
      e.stopPropagation();
      var addId = target.getAttribute('data-id');
      addToCart(addId, 1);
      state.justAddedCardId = addId;
      renderHeader();
      renderMobileNav();
      if (state.page === 'shop') updateShopResultsOnly();
      else renderMain();
      window.setTimeout(function () {
        state.justAddedCardId = null;
        if (state.page === 'shop') updateShopResultsOnly();
        else if (state.page === 'home' || state.page === 'product' || state.page === 'account')
          renderMain();
      }, 1200);
    } else if (action === 'toggle-wishlist') {
      e.stopPropagation();
      var wid = target.getAttribute('data-id');
      if (wid) {
        toggleWishlist(wid);
        renderHeader();
        if (state.page === 'shop') updateShopResultsOnly();
        else renderMain();
      }
    } else if (action === 'open-mobile-menu') {
      state.mobileMenuOpen = true;
      renderOverlays();
    } else if (action === 'open-mobile-filters') {
      state.mobileFiltersOpen = true;
      renderOverlays();
    } else if (action === 'open-search') {
      state.searchOpen = true;
      renderOverlays();
    } else if (action === 'close-overlays') {
      state.mobileMenuOpen = false;
      state.mobileFiltersOpen = false;
      state.searchOpen = false;
      state.searchQuery = '';
      state.activeRecipeId = null;
      renderOverlays();
    } else if (action === 'open-recipe') {
      state.activeRecipeId = target.getAttribute('data-id');
      renderOverlays();
    } else if (action === 'recipe-explore') {
      var rcat = target.getAttribute('data-category');
      state.activeRecipeId = null;
      navigateTo('shop', rcat);
    } else if (action === 'shop-category') {
      state.activeCategory = target.getAttribute('data-category') || 'all';
      state.shopVisibleCount = 8;
      state.mobileFiltersOpen = false;
      window.location.hash =
        state.activeCategory === 'all' ? '/shop' : '/shop/' + state.activeCategory;
      renderHeader();
      renderMain();
      renderOverlays();
    } else if (action === 'reset-shop-filters') {
      state.activeCategory = 'all';
      state.shopSearch = '';
      state.shopMaxPrice = 400000;
      state.shopOnlyAvailable = false;
      state.shopSort = 'popular';
      state.shopVisibleCount = 8;
      window.location.hash = '/shop';
      renderHeader();
      renderMain();
      renderOverlays();
    } else if (action === 'shop-load-more') {
      state.shopVisibleCount += 6;
      updateShopResultsOnly();
    } else if (action === 'pdp-toggle-zoom') {
      state.pdpZoomed = !state.pdpZoomed;
      renderMain();
    } else if (action === 'pdp-thumb') {
      state.pdpImageIdx = Number(target.getAttribute('data-idx')) || 0;
      state.pdpZoomed = false;
      renderMain();
    } else if (action === 'pdp-variant') {
      state.pdpVariantId = target.getAttribute('data-variant-id');
      renderMain();
    } else if (action === 'pdp-qty') {
      var delta = Number(target.getAttribute('data-delta')) || 0;
      state.pdpQty = Math.max(1, state.pdpQty + delta);
      renderMain();
    } else if (action === 'pdp-add') {
      var pdpProd = PRODUCTS.find(function (p) {
        return p.id === state.selectedProductId;
      });
      if (pdpProd) {
        var v =
          pdpProd.variants &&
          pdpProd.variants.find(function (item) {
            return item.id === state.pdpVariantId;
          });
        addToCart(
          pdpProd.id,
          state.pdpQty,
          v ? v.id : 'default',
          v ? v.label : pdpProd.weight,
          v ? v.price : pdpProd.price
        );
        state.pdpJustAdded = true;
        renderHeader();
        renderMobileNav();
        renderMain();
        window.setTimeout(function () {
          state.pdpJustAdded = false;
          if (state.page === 'product') renderMain();
        }, 1400);
      }
    } else if (action === 'pdp-tab') {
      state.pdpTab = target.getAttribute('data-tab') || 'intro';
      renderMain();
    } else if (action === 'cart-qty') {
      var cid = target.getAttribute('data-id');
      var cvar = target.getAttribute('data-variant');
      var cdelta = Number(target.getAttribute('data-delta')) || 0;
      state.cart = state.cart
        .map(function (it) {
          if (it.productId === cid && it.variantId === cvar) {
            return Object.assign({}, it, { quantity: it.quantity + cdelta });
          }
          return it;
        })
        .filter(function (it) {
          return it.quantity > 0;
        });
      saveStorage(STORAGE_KEYS.cart, state.cart);
      renderHeader();
      renderMobileNav();
      renderMain();
    } else if (action === 'cart-remove') {
      var rid = target.getAttribute('data-id');
      var rvar = target.getAttribute('data-variant');
      state.cart = state.cart.filter(function (it) {
        return !(it.productId === rid && it.variantId === rvar);
      });
      saveStorage(STORAGE_KEYS.cart, state.cart);
      renderHeader();
      renderMobileNav();
      renderMain();
    } else if (action === 'auth-mode') {
      state.authMode = target.getAttribute('data-mode') || 'login';
      renderMain();
    } else if (action === 'account-tab') {
      state.accountTab = target.getAttribute('data-tab') || 'orders';
      renderMain();
    } else if (action === 'account-logout') {
      state.profile.isAuthenticated = false;
      saveStorage(STORAGE_KEYS.profile, state.profile);
      renderMain();
    } else if (action === 'toggle-order') {
      var oid = target.getAttribute('data-id');
      state.expandedOrderId = state.expandedOrderId === oid ? null : oid;
      renderMain();
    } else if (action === 'toggle-address-form') {
      state.showAddressForm = !state.showAddressForm;
      renderMain();
    } else if (action === 'delete-address') {
      var aid = target.getAttribute('data-id');
      state.addresses = state.addresses.filter(function (a) {
        return a.id !== aid;
      });
      saveStorage(STORAGE_KEYS.addresses, state.addresses);
      renderMain();
    } else if (action === 'faq-toggle') {
      var fid = target.getAttribute('data-id');
      state.faqOpenId = state.faqOpenId === fid ? null : fid;
      renderMain();
    } else if (action === 'scroll-story') {
      var el = document.getElementById('golabtoon-story');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'choose-search-term') {
      var term = target.getAttribute('data-term') || '';
      state.searchQuery = term;
      if (state.recentSearches.indexOf(term) === -1) {
        state.recentSearches = [term].concat(state.recentSearches).slice(0, 5);
      }
      renderOverlays();
    } else if (action === 'clear-search') {
      state.searchQuery = '';
      renderOverlays();
    } else if (action === 'search-cat') {
      var scat = target.getAttribute('data-category') || 'all';
      state.searchOpen = false;
      state.searchQuery = '';
      navigateTo('shop', scat);
    } else if (action === 'search-select-product') {
      var spid = target.getAttribute('data-id');
      state.searchOpen = false;
      state.searchQuery = '';
      if (spid) {
        selectProductState(spid, true);
        renderAll();
      }
    }
  });

  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.id === 'shop-search-input') {
      state.shopSearch = t.value;
      updateShopResultsOnly();
    } else if (t.hasAttribute('data-shop-range')) {
      state.shopMaxPrice = Number(t.value);
      updateShopResultsOnly();
    } else if (t.id === 'overlay-search-input') {
      state.searchQuery = t.value;
      var body = document.getElementById('overlay-search-body');
      if (body) body.innerHTML = renderSearchResultsBody();
    }
  });

  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.id === 'shop-sort-select') {
      state.shopSort = t.value;
      updateShopResultsOnly();
    } else if (t.hasAttribute('data-shop-stock')) {
      state.shopOnlyAvailable = Boolean(t.checked);
      updateShopResultsOnly();
    } else if (t.name === 'delivery' || t.name === 'payment') {
      if (t.name === 'delivery') state.checkout.deliveryMethod = t.value;
      else state.checkout.paymentMethod = t.value;
      // Preserve typed fields before updating radio highlight
      var fn = document.getElementById('chk-fullname');
      var mb = document.getElementById('chk-mobile');
      var pr = document.getElementById('chk-province');
      var ct = document.getElementById('chk-city');
      var ad = document.getElementById('chk-address');
      var ps = document.getElementById('chk-postal');
      var nt = document.getElementById('chk-notes');
      if (fn) state.checkout.fullName = fn.value;
      if (mb) state.checkout.mobile = mb.value;
      if (pr) state.checkout.province = pr.value;
      if (ct) state.checkout.city = ct.value;
      if (ad) state.checkout.address = ad.value;
      if (ps) state.checkout.postalCode = ps.value;
      if (nt) state.checkout.notes = nt.value;
      renderMain();
    }
  });

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (form.id === 'newsletter-form') {
      e.preventDefault();
      var emailInput = document.getElementById('newsletter-email');
      var email = emailInput ? emailInput.value.trim() : '';
      if (!email || email.indexOf('@') === -1) {
        state.newsletterError = 'لطفاً یک نشانی ایمیل معتبر وارد کنید.';
        state.newsletterEmail = email;
      } else {
        state.newsletterError = '';
        state.newsletterDone = true;
        state.newsletterEmail = '';
      }
      renderMain();
    } else if (form.id === 'pdp-review-form') {
      e.preventDefault();
      var authEl = document.getElementById('pdp-review-author');
      var txtEl = document.getElementById('pdp-review-text');
      var author = authEl ? authEl.value.trim() : '';
      var text = txtEl ? txtEl.value.trim() : '';
      if (!author || !text) return;
      state.pdpReviews.unshift({
        id: 'user-rev-' + Date.now(),
        author: author,
        city: 'ثبت‌شده توسط کاربر',
        date: 'امروز',
        rating: 5,
        comment: text,
      });
      state.pdpReviewSaved = true;
      renderMain();
    } else if (form.id === 'cart-discount-form') {
      e.preventDefault();
      var discEl = document.getElementById('cart-discount-input');
      var cleaned = discEl ? discEl.value.trim().toUpperCase() : '';
      if (!cleaned) {
        state.discountCode = '';
        state.discountMsg = '';
      } else if (cleaned === 'GOLAB10') {
        state.discountCode = 'GOLAB10';
        state.discountMsg = 'کد تخفیف ۱۰٪ با موفقیت اعمال شد.';
      } else {
        state.discountMsg = 'کد تخفیف نامعتبر است. (برای تست از کد GOLAB10 استفاده کنید)';
      }
      renderMain();
    } else if (form.id === 'checkout-form') {
      e.preventDefault();
      var fn = document.getElementById('chk-fullname').value.trim();
      var mb = document.getElementById('chk-mobile').value.trim();
      var pr = document.getElementById('chk-province').value;
      var ct = document.getElementById('chk-city').value.trim();
      var ad = document.getElementById('chk-address').value.trim();
      var ps = document.getElementById('chk-postal').value.trim();
      var nt = document.getElementById('chk-notes').value.trim();

      state.checkout.fullName = fn;
      state.checkout.mobile = mb;
      state.checkout.province = pr;
      state.checkout.city = ct;
      state.checkout.address = ad;
      state.checkout.postalCode = ps;
      state.checkout.notes = nt;

      var errs = {};
      if (fn.length < 3) errs.fullName = 'لطفاً نام و نام خانوادگی را کامل وارد کنید.';
      if (!/^09\d{9}$/.test(mb)) errs.mobile = 'شماره موبایل باید ۱۱ رقم و با ۰۹ شروع شود.';
      if (ct.length < 2) errs.city = 'نام شهر را وارد کنید.';
      if (ad.length < 10) errs.address = 'نشانی پستی کامل را وارد کنید.';
      if (!/^\d{10}$/.test(ps)) errs.postalCode = 'کد پستی باید دقیقاً ۱۰ رقم باشد.';

      state.checkout.errors = errs;
      if (Object.keys(errs).length > 0) {
        renderMain();
        return;
      }

      var subtotal = state.cart.reduce(function (s, i) {
        return s + i.price * i.quantity;
      }, 0);
      var discount =
        state.discountCode.toUpperCase() === 'GOLAB10' ? Math.round(subtotal * 0.1) : 0;
      var shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : BASE_SHIPPING_COST;
      var total = Math.max(0, subtotal - discount + shipping);

      var newOrder = {
        id: 'ord-' + Date.now(),
        orderNumber: 'GL-' + toPersianDigits(Math.floor(100000 + Math.random() * 899999)),
        createdAt: 'امروز · ۱۴۰۵',
        status: 'در حال آماده‌سازی',
        items: state.cart.slice(),
        subtotal: subtotal,
        discount: discount,
        shippingCost: shipping,
        total: total,
        recipientName: fn,
        mobile: mb,
        addressSummary: pr + '، ' + ct + '، ' + ad,
        deliveryMethod: state.checkout.deliveryMethod,
        paymentMethod: state.checkout.paymentMethod,
        notes: nt || undefined,
      };

      state.orders.unshift(newOrder);
      saveStorage(STORAGE_KEYS.orders, state.orders);
      state.expandedOrderId = newOrder.id;
      state.cart = [];
      saveStorage(STORAGE_KEYS.cart, state.cart);
      state.discountCode = '';
      state.discountMsg = '';
      if (!state.profile.isAuthenticated) {
        state.profile.isAuthenticated = true;
        state.profile.fullName = fn;
        state.profile.mobile = mb;
        saveStorage(STORAGE_KEYS.profile, state.profile);
      }
      state.checkout.confirmedOrder = newOrder;
      renderHeader();
      renderMobileNav();
      renderMain();
    } else if (form.id === 'account-auth-form') {
      e.preventDefault();
      var nameInput = document.getElementById('auth-name');
      var mobInput = document.getElementById('auth-mobile');
      state.profile = {
        isAuthenticated: true,
        fullName:
          state.authMode === 'register' && nameInput && nameInput.value.trim()
            ? nameInput.value.trim()
            : 'مشتری گرامی گلابتون',
        mobile: mobInput && mobInput.value.trim() ? mobInput.value.trim() : '09120000000',
        email: 'customer@golabtoonshop.example',
      };
      saveStorage(STORAGE_KEYS.profile, state.profile);
      renderHeader();
      renderMain();
    } else if (form.id === 'account-profile-form') {
      e.preventDefault();
      state.profile.fullName = document.getElementById('prof-fullname').value.trim() || state.profile.fullName;
      state.profile.mobile = document.getElementById('prof-mobile').value.trim() || state.profile.mobile;
      state.profile.email = document.getElementById('prof-email').value.trim() || state.profile.email;
      saveStorage(STORAGE_KEYS.profile, state.profile);
      state.accountSavedNotice = 'تغییرات اطلاعات حساب ذخیره شد.';
      renderMain();
      window.setTimeout(function () {
        state.accountSavedNotice = '';
        if (state.page === 'account' && state.accountTab === 'profile') renderMain();
      }, 2500);
    } else if (form.id === 'account-address-form') {
      e.preventDefault();
      var title = document.getElementById('addr-title').value.trim();
      var prov = document.getElementById('addr-province').value;
      var city = document.getElementById('addr-city').value.trim();
      var postal = document.getElementById('addr-postal').value.trim();
      var full = document.getElementById('addr-full').value.trim();
      if (!title || !city || !full) return;
      state.addresses.unshift({
        id: 'addr-' + Date.now(),
        title: title,
        recipient: state.profile.fullName,
        mobile: state.profile.mobile,
        province: prov,
        city: city,
        address: full,
        postalCode: postal || '1234567890',
      });
      saveStorage(STORAGE_KEYS.addresses, state.addresses);
      state.showAddressForm = false;
      renderMain();
    } else if (form.id === 'contact-form') {
      e.preventDefault();
      var cname = document.getElementById('cnt-name').value.trim();
      var cmsg = document.getElementById('cnt-message').value.trim();
      if (!cname || !cmsg) return;
      state.contactSubmitted = true;
      renderMain();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (state.searchOpen || state.activeRecipeId || state.mobileMenuOpen || state.mobileFiltersOpen) {
        state.searchOpen = false;
        state.searchQuery = '';
        state.activeRecipeId = null;
        state.mobileMenuOpen = false;
        state.mobileFiltersOpen = false;
        renderOverlays();
      }
    } else if ((e.key === 'Enter' || e.key === ' ') && e.target.getAttribute('data-action') === 'select-product') {
      if (e.target.tagName !== 'BUTTON') {
        e.preventDefault();
        var pid = e.target.getAttribute('data-id');
        if (pid) {
          selectProductState(pid, true);
          renderAll();
        }
      }
    }
  });

  window.addEventListener('hashchange', function () {
    parseHashRoute();
    renderAll();
  });

  // Start rotating announcements & boot storefront
  window.setInterval(function () {
    if (!state.showAnnouncement) return;
    state.announcementIdx = (state.announcementIdx + 1) % ANNOUNCEMENTS.length;
    renderAnnouncement();
  }, 5000);

  initCheckoutDefaults();
  parseHashRoute();
  renderAll();
})();
