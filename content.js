(function() {
    // === КОНФІГУРАЦІЯ ===
    const COLUMN_MANAGER_URL = "https://member.expireddomains.net/account/columnmanager/";
    
    // Списки для фільтрів
    const BLACK_ZONES = ['faith', 'auspost', 'pink', 'sanofi', 'vote', 'barclaycard', 'trading', 'flickr', 'nexus', 'flights', 'abogado', 'ipiranga', 'bradesco', 'java', 'express', 'frl', 'you', 'energy', 'garden', 'repair', 'brother', 'watch', 'memorial', 'rocks', 'gal', 'hamburg', 'jeep', 'bar', 'soy', 'osaka', 'phone', 'horse', 'world', 'exposed', 'sandvik', 'futbol', 'gay', 'study', 'box', 'ryukyu', 'nike', 'bid', 'dental', 'ngo', 'engineering', 'ventures', 'tirol', 'mma', 'cars', 'kaufen', 'bauhaus', 'supply', 'voto', 'jp', 'whoswho', 'download', 'community', 'financial', 'africa', 'forsale', 'rip', 'safety', 'center', 'eco', 'email', 'philips', 'abb', 'how', 'forex', 'makeup', 'family', 'com.my', 'google', 'schwarz', 'basketball', 'hosting', 'versicherung', 'sarl', 'services', 'engineer', 'shoes', 'ruhr', 'wang', 'prod', 'insure', 'talk', 'cool', 'watches', 'wine', 'agency', 'kpmg', 'dance', 'page', 'capital', 'nico', 'toshiba', 'lifestyle', 'casa', 'epson', 'tattoo', 'racing', 'yoga', 'hair', 'holiday', 'dhl', 'sucks', 'voting', 'capetown', 'show', 'compare', 'viajes', 'immobilien', 'vig', 'softbank', 'sky', 'giving', 'locker', 'komatsu', 'video', 'ski', 'dot', 'studio', 'restaurant', 'genting', 'law', 'partners', 'skin', 'yandex', 'tokyo', 'plumbing', 'lol', 'song', 'nagoya', 'claims', 'cam', 'fage', 'democrat', 'date', 'trust', 'broker', 'rent', 'design', 'construction', 'fish', 'rehab', 'axa', 'diamonds', 'crs', 'amex', 'dvag', 'gop', 'kim', 'cooking', 'cfa', 'au', 'markets', 'money', 'mortgage', 'store', 'boo', 'gives', 'moi', 'pioneer', 'spa', 'taipei', 'akdn', 'villas', 'doctor', 'dealer', 'tube', 'case', 'cn', 'toyota', 'baby', 'saxo', 'tv', 'pharmacy', 'uno', 'press', 'direct', 'education', 'fashion', 'jewelry', 'care', 'equipment', 'read', 'lotto', 'luxury', 'football', 'tires', 'saarland', 'toys', 'sydney', 'sener', 'diy', 'feedback', 'rodeo', 'amsterdam', 'accountants', 'photo', 'desi', 'computer', 'vision', 'fail', 'contractors', 'flowers', 'prof', 'erni', 'comau', 'healthcare', 'credit', 'itau', 'irish', 'audi', 'solutions', 'qpon', 'comtr', 'dnp', 'rugby', 'sncf', 'singles', 'yokohama', 'productions', 'discount', 'run', 'monash', 'okinawa', 'yachts', 'accountant', 'immo', 'leclerc', 'bot', 'fishing', 'college', 'surf', 'earth', 'lighting', 'shopping', 'gold', 'gripe', 'madrid', 'maison', 'day', 'degree', 'jetzt', 'porn', 'army', 'hockey', 'nab', 'menu', 'institute', 'forum', 'spot', 'fit', 'hsbc', 'kr', 'fast', 'software', 'webcam', 'sbi', 'food', 'corsica', 'sap', 'music', 'abudhabi', 'rentals', 'works', 'cm', 'creditcard', 'mba', 'quest', 'ir', 'promo', 'man', 'ru', 'wien', 'tips', 'living', 'photos', 'management', 'youtube', 'cern', 'shop', 'sina', 'vodka', 'ist', 'afl', 'nhk', 'career', 'miami', 'rich', 'stream', 'lidl', 'beer', 'deal', 'organic', 'fox', 'report', 'eus', 'fujitsu', 'us', 'meet', 'car', 'ismaili', 'gmo', 'parts', 'shell', 'sexy', 'bio', 'party', 'christmas', 'science', 'catering', 'voyage', 'next', 'cricket', 'estate', 'tax', 'srl', 'limited', 'shiksha', 'swiss', 'tennis', 'call', 'exchange', 'love', 'neustar', 'lawyer', 'scb', 'recipes', 'realestate', 'bible', 'dentist', 'ua', 'today', 'pizza', 'blackfriday', 'health', 'bridgestone', 'attorney', 'ltda', 'id', 'haus', 'cba', 'men', 'surgery', 'directory', 'cheap', 'style', 'scot', 'boston', 'coupons', 'contact', 'ceo', 'realtor', 'mom', 'sharp', 'quebec', 'physio', 'navy', 'courses', 'work', 'broadway', 'graphics', 'hiphop', 'gle', 'actor', 'bnpparibas', 'properties', 'buzz', 'cyou', 'solar', 'kred', 'gmail', 'berlin', 'zone', 'gdn', 'academy', 'tui', 'sex', 'trade', 'support', 'eat', 'auto', 'mov', 'office', 'goo', 'sbs', 'delivery', 'legal', 'consulting', 'camera', 'tools', 'godaddy', 'diet', 'canon', 'ovh', 'photography', 'art', 'gratis', 'ren', 'dad', 'seat', 'ifm', 'co.id', 'industries', 'honda', 'news', 'systems', 'training', 'koeln', 'tech', 'social', 'save', 'sale', 'city', 'limo', 'associates', 'fyi', 'bank', 'ar', 'vip', 'schmidt', 'cards', 'moe', 'market', 'reise', 'bike', 'cleaning', 'rwe', 'bmw', 'farm', 'town', 'loan', 'weber', 'bzh', 'apartments', 'tienda', 'tickets', 'green', 'chrome', 'uol', 'supplies', 'williamhill', 'chat', 'goog', 'llc', 'house', 'theater', 'brussels', 'pet', 'hitachi', 'moda', 'temasek', 'bargains', 'paris', 'cruises', 'cfd', 'golf', 'fm', 'events', 'vin', 'aws', 'map', 'realty', 'company', 'team', 'melbourne', 'fitness', 'church', 'school', 'citic', 'amazon', 'su', 'theatre', 'marketing', 'autos', 'global', 'kpn', 'boutique', 'wtf', 'kids', 'film', 'commy', 'property', 'foo', 'luxe', 'gifts', 'beauty', 'radio', 'bond', 'ninja', 'movie', 'audio', 'rio', 'vegas', 'careers', 'adult', 'weir', 'london', 'tw', 'protection', 'dog', 'furniture', 'plus', 'cymru', 'taxi', 'life', 'pictures', 'investments', 'ltd', 'vlaanderen', 'tours', 'airforce', 'band', 'enterprises', 'blue', 'microsoft', 'soccer', 'hot', 'kitchen', 'ads', 'panasonic', 'gmbh', 'phd', 'gallery', 'storage', 'tr', 'coffee', 'cafe', 'website', 'ong', 'esq', 'barcelona', 'meme', 'group', 'coach', 'archi', 'nyc', 'builders', 'florist', 'cologne', 'durban', 'no', 'charity', 'build', 'red', 'holdings', 'foundation', 'gift', 'fund', 'republican', 'zero', 'juegos', 'joburg', 'edeka', 'dating', 'globo', 'observer', 'med', 'by', 'clothing', 'wedding', 'security', 'pics', 'guitars', 'ses', 'rsvp', 'sony', 'homes', 'xin', 'international', 'vet', 'krd', 'barclays', 'loans', 'reisen', 'stockholm', 'media', 'clinic', 'camp', 'university', 'bbc', 'org.uk', 'ing', 'select', 'vacations', 'hospital', 'istanbul', 'rmit', 'lgbt', 'condos', 'jcb', 'finance', 'zip', 'deloitte', 'boats', 'hiv', 'pub', 'moscow', 'country', 'statefarm', 'nrw', 'wales', 'kiwi', 'ntt', 'salon', 'monster', 'tatar', 'pictet', 'schule', 'motorcycles', 'zuerich', 'cuisinella', 'network', 'glass', 'kyoto', 'dev', 'abbott', 'cab', 'technology', 'lease', 'free', 'gent', 'bayern', 'deals', 'ooo', 'alsace', 'business'];
    
    const GAMBLING_WORDS = ['coin', 'bet', 'gambl', 'game', 'win', 'bonus', 'baccarat', 'luck', 'pokies', 'roulette', 'spin', 'poker', 'blackjack', 'parlay', 'bitstar', 'bookmaker', 'gaming', 'stake', 'zilla', 'wallet', 'casino', 'play', 'cash', 'jackpot', 'slot', 'token'];

    // Чекаємо завантаження DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Перевірка: показуємо кнопку тільки на expireddomains.net
        if (!window.location.href.includes('expireddomains.net')) {
            return;
        }
        
        // Перевіряємо чи кнопка вже існує
        if (document.getElementById('domain-grabber-launch-btn')) {
            return;
        }
        
        // Створюємо кнопку запуску (тільки на expireddomains.net)
        const launchBtn = document.createElement('button');
        launchBtn.innerText = '🚀 Grab';
        launchBtn.id = 'domain-grabber-launch-btn';
        Object.assign(launchBtn.style, {
            position: 'fixed', bottom: '20px', left: '20px', zIndex: '100000',
            padding: '14px 24px', fontSize: '16px', background: 'linear-gradient(135deg, #229e94 0%, #1a7d75 100%)', 
            color: 'white', border: 'none', borderRadius: '30px', cursor: 'pointer', 
            fontWeight: 'bold', boxShadow: '0 6px 20px rgba(34, 158, 148, 0.4)',
            transition: 'all 0.3s ease', fontFamily: 'Segoe UI, sans-serif'
        });
        
        // Click handler
        launchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            showMainUI();
        });
        
        // Перевіряємо чи панель була відкрита раніше
        const wasPanelOpen = localStorage.getItem('domain-grabber-panel-open') === 'true';
        if (wasPanelOpen) {
            showMainUI();
        }
        
        // Hover effect
        launchBtn.addEventListener('mouseenter', () => {
            Object.assign(launchBtn.style, {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(34, 158, 148, 0.5)'
            });
        });
        launchBtn.addEventListener('mouseleave', () => {
            Object.assign(launchBtn.style, {
                transform: 'translateY(0)',
                boxShadow: '0 6px 20px rgba(34, 158, 148, 0.4)'
            });
        });
        
        document.body.appendChild(launchBtn);
    }

    function showMainUI() {
        const old = document.getElementById('grabber-ui');
        if (old) { 
            old.remove(); 
            localStorage.setItem('domain-grabber-panel-open', 'false');
            return; 
        }
        
        // Зберігаємо що панель відкрита
        localStorage.setItem('domain-grabber-panel-open', 'true');

        const ui = document.createElement('div');
        ui.id = 'grabber-ui';
        
        // Відновлюємо збережену позицію або використовуємо дефолтну
        const savedPosition = localStorage.getItem('domain-grabber-position');
        let positionStyle = {};
        
        if (savedPosition) {
            try {
                const pos = JSON.parse(savedPosition);
                positionStyle = {
                    top: pos.top,
                    left: pos.left,
                    right: 'auto'
                };
            } catch (e) {
                // Якщо помилка - використовуємо дефолт
                positionStyle = { top: '20px', right: '20px' };
            }
        } else {
            positionStyle = { top: '20px', right: '20px' };
        }
        
        Object.assign(ui.style, {
            position: 'fixed',
            ...positionStyle,
            zIndex: '100001', 
            background: '#1e293b',
            padding: '0', 
            borderRadius: '12px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)', 
            fontFamily: 'system-ui, -apple-system, sans-serif', 
            width: '600px',
            maxHeight: 'calc(100vh - 40px)',
            overflowY: 'auto',
            animation: 'slideInRight 0.3s ease-out',
            cursor: 'move'
        });

        ui.innerHTML = `
            <style>
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                #grabber-ui::-webkit-scrollbar {
                    width: 8px;
                }
                #grabber-ui::-webkit-scrollbar-track {
                    background: #1e293b;
                    border-radius: 12px;
                }
                #grabber-ui::-webkit-scrollbar-thumb {
                    background: #475569;
                    border-radius: 4px;
                }
                #grabber-ui::-webkit-scrollbar-thumb:hover {
                    background: #64748b;
                }
                .grabber-content {
                    background: #1e293b;
                    padding: 24px;
                    border-radius: 12px;
                    cursor: default;
                }
                .grabber-header {
                    cursor: move;
                    user-select: none;
                }
                .section-card {
                    background: #334155;
                    padding: 14px;
                    border-radius: 8px;
                    margin-bottom: 14px;
                    border: 1px solid #475569;
                }
                .metric-checkbox {
                    display: flex;
                    align-items: center;
                    padding: 8px 12px;
                    background: #475569;
                    border-radius: 6px;
                    margin-bottom: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: 1px solid #64748b;
                    user-select: none;
                }
                .metric-checkbox:hover {
                    border-color: #3b82f6;
                    background: #4b5563;
                    transform: translateX(2px);
                }
                .metric-checkbox input {
                    margin-right: 10px;
                    width: 18px;
                    height: 18px;
                    cursor: pointer;
                    accent-color: #3b82f6;
                }
                .metric-checkbox label {
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 500;
                    color: #e2e8f0;
                    flex: 1;
                }
                .mode-switch {
                    display: flex;
                    background: #334155;
                    border-radius: 8px;
                    padding: 3px;
                    gap: 3px;
                    margin-bottom: 12px;
                    border: 1px solid #475569;
                }
                .mode-switch button {
                    flex: 1;
                    padding: 10px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    background: transparent;
                    color: #94a3b8;
                }
                .mode-switch button.active {
                    background: #3b82f6;
                    color: white;
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
                }
                .spinner-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    z-index: 100002;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
                .spinner {
                    width: 60px;
                    height: 60px;
                    border: 5px solid rgba(255, 255, 255, 0.3);
                    border-top: 5px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .spinner-text {
                    color: white;
                    font-size: 18px;
                    font-weight: 600;
                    margin-top: 20px;
                    text-align: center;
                }
            </style>
            <div class="grabber-content">
                <div class="grabber-header">
                    <h2 style="margin: 0 0 16px; color: #f1f5f9; text-align: center; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">
                        <span style="color: #3b82f6;">⚡</span> Domain Grabber
                    </h2>
                </div>
                
                <!-- Mode Switch -->
                <div class="mode-switch">
                    <button id="modeBrands" class="active">🏷️ BRANDS</button>
                    <button id="modeDrop">💧 DROP</button>
                </div>
                
                <!-- Column Manager Section -->
                <div class="section-card" style="background: #475569; border-color: #64748b;">
                    <h3 style="margin: 0 0 10px; font-size: 13px; font-weight: 600; color: #f1f5f9;">⚙️ Колонки</h3>
                    <div style="display: flex; gap: 8px;">
                        <button id="btnGoToSetup" style="flex: 1; padding: 10px; background: #64748b; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px; transition: all 0.2s ease;">
                            🔗 Перейти
                        </button>
                        <button id="btnApplyConfig" style="flex: 1; padding: 10px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px; transition: all 0.2s ease;">
                            ✨ Застосувати
                        </button>
                    </div>
                </div>

                <!-- Auto Filters Section -->
                <div class="section-card" style="background: #334155; border-color: #475569;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; cursor: pointer;" id="autofilters-header">
                        <h3 style="margin: 0; font-size: 13px; font-weight: 600; color: #f1f5f9;">🎯 Автозаповнення фільтрів</h3>
                        <span id="autofilters-toggle" style="font-size: 18px; color: #94a3b8; transition: transform 0.2s;">▼</span>
                    </div>
                    
                    <div id="autofilters-content">
                    <!-- Основні фільтри -->
                    <div style="margin-bottom: 10px;">
                        <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 12px; color: #e2e8f0; margin-bottom: 6px; padding: 6px 8px; background: #475569; border-radius: 4px;">
                            <span><input type="checkbox" id="filter_acr_enable" checked style="margin-right: 8px; width: 16px; height: 16px; cursor: pointer; accent-color: #3b82f6;"> ACR >=</span>
                            <input type="number" id="filter_acr_value" value="1" min="0" style="width: 50px; padding: 4px 6px; border: 1px solid #64748b; border-radius: 4px; font-size: 12px; text-align: center; background: #334155; color: #e2e8f0;">
                        </label>
                        <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 12px; color: #e2e8f0; margin-bottom: 6px; padding: 6px 8px; background: #475569; border-radius: 4px;">
                            <span><input type="checkbox" id="filter_available_enable" checked style="margin-right: 8px; width: 16px; height: 16px; cursor: pointer; accent-color: #3b82f6;"> Only Available</span>
                        </label>
                        <label style="display: flex; align-items: center; justify-content: space-between; cursor: pointer; font-size: 12px; color: #e2e8f0; margin-bottom: 6px; padding: 6px 8px; background: #475569; border-radius: 4px;">
                            <span><input type="checkbox" id="filter_limit_enable" checked style="margin-right: 8px; width: 16px; height: 16px; cursor: pointer; accent-color: #3b82f6;"> Results Limit</span>
                            <select id="filter_limit_value" style="width: 70px; padding: 4px 6px; border: 1px solid #64748b; border-radius: 4px; font-size: 12px; background: #334155; color: #e2e8f0;">
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="75">75</option>
                                <option value="100">100</option>
                                <option value="200" selected>200</option>
                            </select>
                        </label>
                        <label style="display: flex; align-items: center; cursor: pointer; font-size: 12px; color: #e2e8f0; margin-bottom: 6px; padding: 6px 8px; background: #475569; border-radius: 4px;">
                            <input type="checkbox" id="filter_exclude_makeoffer_enable" checked style="margin-right: 8px; width: 16px; height: 16px; cursor: pointer; accent-color: #3b82f6;">
                            <span>🚫 Exclude Make Offer</span>
                        </label>
                    </div>
                    
                    <!-- Період -->
                    <div style="margin-bottom: 10px;">
                        <label style="display: block; font-size: 12px; font-weight: 600; color: #f1f5f9; margin-bottom: 6px;">⏱️ Період:</label>
                        <select id="filter_period" style="width: 100%; padding: 6px 8px; border: 1px solid #64748b; border-radius: 4px; font-size: 12px; background: #475569; color: #e2e8f0;">
                            <option value="">Не встановлювати</option>
                            <option value="flast12">12 hours</option>
                            <option value="flast24">24 hours</option>
                            <option value="flast48">48 hours</option>
                            <option value="flast168" selected>7 days</option>
                            <option value="flast14d">14 days</option>
                            <option value="flast30d">30 days</option>
                            <option value="flast60d">60 days</option>
                            <option value="flast90d">90 days</option>
                            <option value="flast120d">120 days</option>
                            <option value="flast365d">365 days</option>
                        </select>
                    </div>
                    
                    <!-- Contains (gambling) -->
                    <div style="margin-bottom: 10px;">
                        <label style="display: flex; align-items: center; cursor: pointer; font-size: 12px; color: #e2e8f0; margin-bottom: 6px;">
                            <input type="checkbox" id="filter_contains_enable" style="margin-right: 8px; width: 16px; height: 16px; cursor: pointer; accent-color: #3b82f6;">
                            <span style="font-weight: 600;">🎰 Contains (<span id="gambling_count">26</span>)</span>
                        </label>
                        <textarea id="filter_contains_list" placeholder="coin bet gambl game win..." style="width: 100%; height: 60px; border: 1px solid #64748b; border-radius: 4px; padding: 6px; font-size: 11px; font-family: monospace; background: #475569; color: #e2e8f0; resize: vertical; box-sizing: border-box;"></textarea>
                    </div>
                    
                    <!-- Black zones -->
                    <div style="margin-bottom: 10px;">
                        <label style="display: flex; align-items: center; cursor: pointer; font-size: 12px; color: #e2e8f0; margin-bottom: 6px;">
                            <input type="checkbox" id="filter_blackzone_enable" style="margin-right: 8px; width: 16px; height: 16px; cursor: pointer; accent-color: #3b82f6;">
                            <span style="font-weight: 600;">🚫 Block TLDs (<span id="blackzone_count">629</span>)</span>
                        </label>
                        <textarea id="filter_blackzone_list" placeholder="faith auspost pink sanofi..." style="width: 100%; height: 60px; border: 1px solid #64748b; border-radius: 4px; padding: 6px; font-size: 11px; font-family: monospace; background: #475569; color: #e2e8f0; resize: vertical; box-sizing: border-box;"></textarea>
                    </div>
                    
                    <!-- Кнопка застосувати -->
                    <button id="btnApplyFilters" style="width: 100%; padding: 12px; background: #f59e0b; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.2s ease; margin-top: 8px;">
                        ⚡ Встановити фільтри
                    </button>
                    
                    <!-- Кнопка скидання налаштувань -->
                    <button id="btnResetFilters" style="width: 100%; padding: 10px; background: #475569; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 12px; transition: all 0.2s ease; margin-top: 6px;">
                        🔄 Скинути налаштування
                    </button>
                    </div>
                </div>

                <!-- Brands Input (shown only in BRANDS mode) -->
                <div id="brandsSection" style="margin-bottom: 14px;">
                    <label style="display: block; font-weight: 600; margin-bottom: 8px; color: #f1f5f9; font-size: 13px;">
                        🏷️ Бренди:
                    </label>
                    <textarea id="brandInput" style="width: 100%; height: 70px; border: 1px solid #64748b; border-radius: 6px; padding: 10px; font-size: 13px; font-family: 'Segoe UI', sans-serif; transition: all 0.2s ease; resize: vertical; background: #334155; color: #e2e8f0; box-sizing: border-box;" placeholder="nike adidas puma..."></textarea>
                </div>

                <!-- Metrics Selection -->
                <div class="section-card">
                    <h3 style="margin: 0 0 10px; font-size: 13px; font-weight: 600; color: #f1f5f9; cursor: pointer; user-select: none;" id="metricsHeader">📊 Метрики:</h3>
                    <div id="metricsContent" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                        <div class="metric-checkbox">
                            <input type="checkbox" id="metric_bl" checked>
                            <label for="metric_bl">BL</label>
                        </div>
                        <div class="metric-checkbox">
                            <input type="checkbox" id="metric_acr" checked>
                            <label for="metric_acr">ACR</label>
                        </div>
                        <div class="metric-checkbox">
                            <input type="checkbox" id="metric_cf" checked>
                            <label for="metric_cf">CF</label>
                        </div>
                        <div class="metric-checkbox">
                            <input type="checkbox" id="metric_tf" checked>
                            <label for="metric_tf">TF</label>
                        </div>
                        <div class="metric-checkbox">
                            <input type="checkbox" id="metric_dp" checked>
                            <label for="metric_dp">DP</label>
                        </div>
                    </div>
                </div>

                <!-- Filters -->
                <div class="section-card">
                    <h3 style="margin: 0 0 10px; font-size: 13px; font-weight: 600; color: #f1f5f9; cursor: pointer; user-select: none;" id="filtersHeader">🔍 Фільтри:</h3>
                    <div id="filtersContent">
                    <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px; color: #e2e8f0; margin-bottom: 10px; padding: 8px 10px; background: #475569; border-radius: 6px;">
                        <input type="checkbox" id="onlyAvailable" checked style="margin-right: 10px; width: 18px; height: 18px; cursor: pointer; accent-color: #3b82f6;"> 
                        <span style="font-weight: 500;">✅ Тільки Available</span>
                    </label>
                    <div style="display: flex; align-items: center; gap: 10px; padding: 8px 10px; background: #475569; border-radius: 6px;">
                        <label style="display: flex; align-items: center; cursor: pointer; font-size: 13px; color: #e2e8f0;">
                            <input type="checkbox" id="useYearFilter" checked style="margin-right: 10px; width: 18px; height: 18px; cursor: pointer; accent-color: #3b82f6;"> 
                            <span style="font-weight: 500;">📅 Рік >=</span>
                        </label>
                        <input type="number" id="yearValue" value="2020" style="width: 70px; padding: 6px 10px; border: 1px solid #64748b; border-radius: 6px; font-size: 13px; font-weight: 600; text-align: center; background: #334155; color: #e2e8f0;">
                    </div>
                    </div>
                </div>

                <!-- Export Format Selection -->
                <div class="section-card" style="margin-bottom: 14px;">
                    <h3 style="margin: 0 0 10px; font-size: 13px; font-weight: 600; color: #f1f5f9;">📥 Формат експорту:</h3>
                    <div style="display: flex; gap: 8px;">
                        <label style="flex: 1; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 13px; color: #e2e8f0; padding: 10px; background: #475569; border-radius: 6px; border: 2px solid #3b82f6; transition: all 0.2s ease;" id="formatJsonLabel">
                            <input type="radio" name="exportFormat" id="formatJson" value="json" checked style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer; accent-color: #3b82f6;">
                            <span style="font-weight: 600;">📋 JSON</span>
                        </label>
                        <label style="flex: 1; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 13px; color: #e2e8f0; padding: 10px; background: #475569; border-radius: 6px; border: 2px solid transparent; transition: all 0.2s ease;" id="formatExcelLabel">
                            <input type="radio" name="exportFormat" id="formatExcel" value="excel" style="margin-right: 8px; width: 18px; height: 18px; cursor: pointer; accent-color: #10b981;">
                            <span style="font-weight: 600;">📊 Excel</span>
                        </label>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 10px; margin-top: 14px;">
                    <button id="btnProcess" style="flex: 1; padding: 14px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 14px; transition: all 0.2s ease; letter-spacing: 0.3px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);">
                        🎯 ЗІБРАТИ І СКОПІЮВАТИ
                    </button>
                    <button id="btnCloseUI" style="padding: 14px 18px; background: #475569; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 18px; transition: all 0.2s ease; font-weight: 600;">
                        ✖️
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(ui);

        // Завантаження збережених налаштувань
        const savedSettings = loadSettings();
        if (savedSettings) {
            // Відновлюємо метрики
            if (savedSettings.metrics) {
                Object.keys(savedSettings.metrics).forEach(key => {
                    const checkbox = document.getElementById(`metric_${key}`);
                    if (checkbox) checkbox.checked = savedSettings.metrics[key];
                });
            }
            // Відновлюємо фільтри
            if (savedSettings.filters) {
                const onlyAva = document.getElementById('onlyAvailable');
                const useYear = document.getElementById('useYearFilter');
                const yearVal = document.getElementById('yearValue');
                if (onlyAva) onlyAva.checked = savedSettings.filters.onlyAvailable;
                if (useYear) useYear.checked = savedSettings.filters.useYearFilter;
                if (yearVal) yearVal.value = savedSettings.filters.yearValue;
            }
            // Відновлюємо бренди
            if (savedSettings.brands) {
                const brandInput = document.getElementById('brandInput');
                if (brandInput) brandInput.value = savedSettings.brands;
            }
        }

        // Make draggable
        makeDraggable(ui);

        // Mode switching
        let currentMode = savedSettings?.mode || 'drop';
        const modeBrands = document.getElementById('modeBrands');
        const modeDrop = document.getElementById('modeDrop');
        const brandsSection = document.getElementById('brandsSection');

        // Встановлюємо збережений режим
        if (currentMode === 'drop') {
            modeDrop.classList.add('active');
            modeBrands.classList.remove('active');
            brandsSection.style.display = 'none';
        } else {
            modeBrands.classList.add('active');
            modeDrop.classList.remove('active');
            brandsSection.style.display = 'block';
        }

        modeBrands.addEventListener('click', () => {
            currentMode = 'brands';
            modeBrands.classList.add('active');
            modeDrop.classList.remove('active');
            brandsSection.style.display = 'block';
            saveSettings();
        });

        modeDrop.addEventListener('click', () => {
            currentMode = 'drop';
            modeDrop.classList.add('active');
            modeBrands.classList.remove('active');
            brandsSection.style.display = 'none';
            saveSettings();
        });

        // Обробники для вибору формату експорту
        const formatJson = document.getElementById('formatJson');
        const formatExcel = document.getElementById('formatExcel');
        const formatJsonLabel = document.getElementById('formatJsonLabel');
        const formatExcelLabel = document.getElementById('formatExcelLabel');
        
        formatJson?.addEventListener('change', () => {
            if (formatJson.checked) {
                formatJsonLabel.style.borderColor = '#3b82f6';
                formatExcelLabel.style.borderColor = 'transparent';
                saveSettings();
            }
        });
        
        formatExcel?.addEventListener('change', () => {
            if (formatExcel.checked) {
                formatExcelLabel.style.borderColor = '#10b981';
                formatJsonLabel.style.borderColor = 'transparent';
                saveSettings();
            }
        });
        
        // Відновлюємо вибраний формат
        if (savedSettings?.exportFormat === 'excel') {
            formatExcel.checked = true;
            formatExcelLabel.style.borderColor = '#10b981';
            formatJsonLabel.style.borderColor = 'transparent';
        }

        // Close button handler
        const btnCloseUI = document.getElementById('btnCloseUI');
        if (btnCloseUI) {
            btnCloseUI.addEventListener('click', () => {
                localStorage.setItem('domain-grabber-panel-open', 'false');
                ui.remove();
            });
        }

        // Add hover effects for buttons
        const addHover = (id) => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.addEventListener('mouseenter', () => {
                    btn.style.transform = 'translateY(-3px) scale(1.02)';
                    btn.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'translateY(0) scale(1)';
                    btn.style.boxShadow = btn.dataset.originalShadow || '0 6px 20px rgba(0,0,0,0.2)';
                });
            }
        };
        
        ['btnGoToSetup', 'btnApplyConfig', 'btnProcess', 'btnCloseUI'].forEach(id => addHover(id));
        
        // Робимо метрики клікабельними
        document.querySelectorAll('.metric-checkbox').forEach(box => {
            box.addEventListener('click', (e) => {
                // Якщо клік не по чекбоксу або лейблу, тоді тоглимо чекбокс
                if (e.target.type !== 'checkbox' && e.target.tagName !== 'LABEL') {
                    const checkbox = box.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.checked = !checkbox.checked;
                        saveSettings();
                    }
                } else {
                    // Якщо клік по чекбоксу або лейблу - зберігаємо після зміни
                    setTimeout(saveSettings, 50);
                }
            });
        });

        // Збереження при зміні фільтрів
        document.getElementById('onlyAvailable')?.addEventListener('change', saveSettings);
        document.getElementById('useYearFilter')?.addEventListener('change', saveSettings);
        document.getElementById('yearValue')?.addEventListener('change', saveSettings);
        
        // Add focus effect for textarea
        const brandInput = document.getElementById('brandInput');
        if (brandInput) {
            brandInput.addEventListener('focus', () => { 
                brandInput.style.borderColor = '#667eea';
                brandInput.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
            });
            brandInput.addEventListener('blur', () => { 
                brandInput.style.borderColor = '#e0e0e0';
                brandInput.style.boxShadow = 'none';
                saveSettings(); // Зберігаємо при втраті фокусу
            });
            // Також зберігаємо при введенні (debounce)
            let brandInputTimeout;
            brandInput.addEventListener('input', () => {
                clearTimeout(brandInputTimeout);
                brandInputTimeout = setTimeout(saveSettings, 500);
            });
        }

        // КНОПКА ПЕРЕЙТИ В COLUMN MANAGER (БЕЗ автоматичних змін)
        const btnGoToSetup = document.getElementById('btnGoToSetup');
        if (btnGoToSetup) {
            btnGoToSetup.addEventListener('click', () => {
                window.location.href = COLUMN_MANAGER_URL;
            });
        }

        // КНОПКА ЗАСТОСУВАТИ КОНФІГУРАЦІЮ (юзер сам збереже)
        const btnApplyConfig = document.getElementById('btnApplyConfig');
        if (btnApplyConfig) {
            btnApplyConfig.addEventListener('click', async () => {
                if (window.location.href.includes("account/columnmanager")) {
                    // Показуємо спіннер
                    const spinner = showSpinner('⚡ Застосування конфігурації...\n\nЗачекайте, будь ласка');
                    
                    try {
                        await autoSetupColumns();
                        spinner.remove();
                        showNotification('✅ Конфігурація застосована!\n\nТепер ВРУЧНУ натисніть "Save changes"', 'success');
                    } catch (e) {
                        spinner.remove();
                        showNotification('❌ Помилка: ' + e.message, 'error');
                    }
                } else {
                    showNotification('❌ Ця функція працює тільки на сторінці Column Manager!\n\nСпочатку натисніть "Перейти"', 'error');
                }
            });
        }

        // Toggle для згортання/розгортання секції автофільтрів
        const autofiltersHeader = document.getElementById('autofilters-header');
        const autofiltersContent = document.getElementById('autofilters-content');
        const autofiltersToggle = document.getElementById('autofilters-toggle');
        
        // Завантаження стану (згорнуто чи ні) з localStorage
        const autofiltersCollapsed = localStorage.getItem('domain-grabber-autofilters-collapsed') === 'true';
        if (autofiltersCollapsed) {
            autofiltersContent.style.display = 'none';
            autofiltersToggle.style.transform = 'rotate(-90deg)';
            autofiltersToggle.textContent = '▶';
        }
        
        autofiltersHeader?.addEventListener('click', () => {
            const isCollapsed = autofiltersContent.style.display === 'none';
            if (isCollapsed) {
                autofiltersContent.style.display = 'block';
                autofiltersToggle.style.transform = 'rotate(0deg)';
                autofiltersToggle.textContent = '▼';
                localStorage.setItem('domain-grabber-autofilters-collapsed', 'false');
            } else {
                autofiltersContent.style.display = 'none';
                autofiltersToggle.style.transform = 'rotate(-90deg)';
                autofiltersToggle.textContent = '▶';
                localStorage.setItem('domain-grabber-autofilters-collapsed', 'true');
            }
        });

        // Обробники для згортання Метрик
        const metricsHeader = document.getElementById('metricsHeader');
        const metricsContent = document.getElementById('metricsContent');
        const metricsCollapsed = localStorage.getItem('domain-grabber-metrics-collapsed') === 'true';
        if (metricsCollapsed && metricsContent) {
            metricsContent.style.display = 'none';
        }
        if (metricsHeader) {
            metricsHeader.addEventListener('click', () => {
                if (metricsContent) {
                    const isHidden = metricsContent.style.display === 'none';
                    metricsContent.style.display = isHidden ? 'grid' : 'none';
                    localStorage.setItem('domain-grabber-metrics-collapsed', !isHidden);
                }
            });
        }
        
        // Обробники для згортання Фільтрів
        const filtersHeader = document.getElementById('filtersHeader');
        const filtersContent = document.getElementById('filtersContent');
        const filtersCollapsed = localStorage.getItem('domain-grabber-filters-collapsed') === 'true';
        if (filtersCollapsed && filtersContent) {
            filtersContent.style.display = 'none';
        }
        if (filtersHeader) {
            filtersHeader.addEventListener('click', () => {
                if (filtersContent) {
                    const isHidden = filtersContent.style.display === 'none';
                    filtersContent.style.display = isHidden ? 'block' : 'none';
                    localStorage.setItem('domain-grabber-filters-collapsed', !isHidden);
                }
            });
        }

        // КНОПКА ВСТАНОВИТИ ФІЛЬТРИ
        const btnApplyFilters = document.getElementById('btnApplyFilters');
        if (btnApplyFilters) {
            btnApplyFilters.addEventListener('click', async () => {
                const spinner = showSpinner('⚡ Встановлення фільтрів...\n\nЗачекайте, будь ласка');
                
                try {
                    await applyFilters();
                    spinner.remove();
                    showNotification('✅ Фільтри встановлено!\n\nТепер можете застосувати фільтра на сайті', 'success');
                } catch (e) {
                    spinner.remove();
                    showNotification('❌ Помилка: ' + e.message, 'error');
                }
            });
        }

        // Збереження налаштувань фільтрів при зміні
        document.getElementById('filter_acr_enable')?.addEventListener('change', saveFilterSettings);
        document.getElementById('filter_acr_value')?.addEventListener('change', saveFilterSettings);
        document.getElementById('filter_available_enable')?.addEventListener('change', saveFilterSettings);
        document.getElementById('filter_limit_enable')?.addEventListener('change', saveFilterSettings);
        document.getElementById('filter_limit_value')?.addEventListener('change', saveFilterSettings);
        document.getElementById('filter_exclude_makeoffer_enable')?.addEventListener('change', saveFilterSettings);
        document.getElementById('filter_period')?.addEventListener('change', saveFilterSettings);
        // Обробники для Contains - очищення при відключенні
        document.getElementById('filter_contains_enable')?.addEventListener('change', function() {
            if (!this.checked) {
                const containsList = document.getElementById('filter_contains_list');
                if (containsList) containsList.value = '';
            }
            saveFilterSettings();
        });
        
        // Обробники для Block TLDs - очищення при відключенні
        document.getElementById('filter_blackzone_enable')?.addEventListener('change', function() {
            if (!this.checked) {
                const blackzoneList = document.getElementById('filter_blackzone_list');
                if (blackzoneList) blackzoneList.value = '';
            }
            saveFilterSettings();
        });
        
        // Збереження з debounce для текстових полів
        let filterListTimeout;
        document.getElementById('filter_contains_list')?.addEventListener('input', () => {
            clearTimeout(filterListTimeout);
            filterListTimeout = setTimeout(() => {
                saveFilterSettings();
            }, 500);
        });
        document.getElementById('filter_blackzone_list')?.addEventListener('input', () => {
            clearTimeout(filterListTimeout);
            filterListTimeout = setTimeout(() => {
                saveFilterSettings();
            }, 500);
        });

        // Завантаження збережених налаштувань фільтрів
        const filterSettings = loadFilterSettings();
        if (filterSettings) {
            document.getElementById('filter_acr_enable').checked = filterSettings.acr_enable;
            document.getElementById('filter_acr_value').value = filterSettings.acr_value;
            document.getElementById('filter_available_enable').checked = filterSettings.available_enable;
            document.getElementById('filter_limit_enable').checked = filterSettings.limit_enable;
            document.getElementById('filter_limit_value').value = filterSettings.limit_value;
            document.getElementById('filter_exclude_makeoffer_enable').checked = filterSettings.exclude_makeoffer_enable;
            document.getElementById('filter_period').value = filterSettings.period;
            document.getElementById('filter_contains_enable').checked = filterSettings.contains_enable;
            document.getElementById('filter_contains_list').value = filterSettings.contains_list;
            document.getElementById('filter_blackzone_enable').checked = filterSettings.blackzone_enable;
            document.getElementById('filter_blackzone_list').value = filterSettings.blackzone_list;
            
            // Оновлюємо лічильники
            updateFilterCounts();
        }

        // КНОПКА СКИНУТИ НАЛАШТУВАННЯ
        const btnResetFilters = document.getElementById('btnResetFilters');
        if (btnResetFilters) {
            btnResetFilters.addEventListener('click', () => {
                if (confirm('Ви впевнені, що хочете скинути всі налаштування фільтрів до дефолтних значень?')) {
                    // Очищуємо збережені налаштування
                    localStorage.removeItem('domain-grabber-filters');
                    
                    // Завантажуємо дефолтні значення
                    const defaults = loadFilterSettings();
                    
                    // Відновлюємо UI
                    document.getElementById('filter_acr_enable').checked = defaults.acr_enable;
                    document.getElementById('filter_acr_value').value = defaults.acr_value;
                    document.getElementById('filter_available_enable').checked = defaults.available_enable;
                    document.getElementById('filter_limit_enable').checked = defaults.limit_enable;
                    document.getElementById('filter_limit_value').value = defaults.limit_value;
                    document.getElementById('filter_exclude_makeoffer_enable').checked = defaults.exclude_makeoffer_enable;
                    document.getElementById('filter_period').value = defaults.period;
                    document.getElementById('filter_contains_enable').checked = defaults.contains_enable;
                    document.getElementById('filter_contains_list').value = defaults.contains_list;
                    document.getElementById('filter_blackzone_enable').checked = defaults.blackzone_enable;
                    document.getElementById('filter_blackzone_list').value = defaults.blackzone_list;
                    
                    // Оновлюємо лічильники
                    updateFilterCounts();
                    
                    // Зберігаємо дефолтні значення
                    saveFilterSettings();
                    
                    showNotification('✅ Налаштування скинуто до дефолтних значень!', 'success');
                }
            });
        }

        const btnProcess = document.getElementById('btnProcess');
        if (btnProcess) {
            btnProcess.addEventListener('click', () => {
                const data = processDomains(currentMode);
                if (data.length > 0) {
                    // Визначаємо вибраний формат
                    const selectedFormat = document.querySelector('input[name="exportFormat"]:checked')?.value || 'json';
                    
                    if (selectedFormat === 'json') {
                        // Кожен домен - окремий рядок (JSONL формат)
                        const jsonLines = data.map(d => JSON.stringify(d)).join('\n');
                        copyToClipboard(jsonLines, `✅ JSON скопійовано!\n\nЗнайдено доменів: ${data.length}`);
                    } else {
                        // Формуємо TSV з вибраними метриками
                        const headers = ['Brand', 'Domain'];
                        if (data[0]?.bl !== undefined) headers.push('BL');
                        if (data[0]?.acr !== undefined) headers.push('ACR');
                        if (data[0]?.cf !== undefined) headers.push('CF');
                        if (data[0]?.tf !== undefined) headers.push('TF');
                        if (data[0]?.dp !== undefined) headers.push('DP');
                        
                        const rows = data.map(d => {
                            const row = [d.brand, d.domain];
                            if (d.bl !== undefined) row.push(d.bl);
                            if (d.acr !== undefined) row.push(d.acr);
                            if (d.cf !== undefined) row.push(d.cf);
                            if (d.tf !== undefined) row.push(d.tf);
                            if (d.dp !== undefined) row.push(d.dp);
                            return row.join('\t');
                        });
                        
                        const tsv = headers.join('\t') + '\n' + rows.join('\n');
                        copyToClipboard(tsv, `✅ Excel дані скопійовано!\n\nЗнайдено доменів: ${data.length}`);
                    }
                } else {
                    showNotification('❌ Домени не знайдені!\n\nПеревірте фільтри та спробуйте ще раз', 'error');
                }
            });
        }
    }

    // Функція показу спіннера
    function showSpinner(message) {
        const spinner = document.createElement('div');
        spinner.className = 'spinner-overlay';
        spinner.innerHTML = `
            <div class="spinner"></div>
            <div class="spinner-text">${message}</div>
        `;
        document.body.appendChild(spinner);
        return spinner;
    }

    // Функція показу нотифікацій
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'grabber-notification';
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6'
        };
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️'
        };
        
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: '100003',
            background: colors[type] || colors.info,
            color: 'white',
            padding: '16px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '600',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            whiteSpace: 'pre-line',
            lineHeight: '1.4',
            maxWidth: '400px',
            animation: 'slideInLeft 0.3s ease-out',
            cursor: 'pointer'
        });
        
        notification.innerHTML = `<span style="font-size: 18px; margin-right: 10px;">${icons[type] || icons.info}</span>${message}`;
        document.body.appendChild(notification);
        
        // Додаємо анімацію slideInLeft якщо її ще немає
        if (!document.getElementById('notification-animation-style')) {
            const style = document.createElement('style');
            style.id = 'notification-animation-style';
            style.textContent = `
                @keyframes slideInLeft {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutLeft {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(-100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Клік для закриття
        notification.addEventListener('click', () => {
            notification.style.animation = 'slideOutLeft 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Автоматичне закриття через 4 секунди
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.animation = 'slideOutLeft 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 4000);
        
        return notification;
    }

    // Функція для перетягування панелі
    function makeDraggable(element) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        const header = element.querySelector('.grabber-header');
        
        if (header) {
            header.onmousedown = dragMouseDown;
        } else {
            element.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            // Ігноруємо клік на інтерактивних елементах
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') {
                return;
            }
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            element.style.cursor = 'grabbing';
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            const newTop = element.offsetTop - pos2;
            const newLeft = element.offsetLeft - pos1;
            
            // Обмежуємо переміщення в межах вікна
            const maxX = window.innerWidth - element.offsetWidth;
            const maxY = window.innerHeight - element.offsetHeight;
            
            element.style.top = Math.max(0, Math.min(newTop, maxY)) + "px";
            element.style.left = Math.max(0, Math.min(newLeft, maxX)) + "px";
            element.style.right = 'auto';
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            element.style.cursor = 'move';
            
            // Зберігаємо позицію в localStorage
            const position = {
                top: element.style.top,
                left: element.style.left
            };
            localStorage.setItem('domain-grabber-position', JSON.stringify(position));
        }
    }

    // === ФУНКЦІЯ АВТОМАТИЗАЦІЇ КОЛОНОК ===
    async function autoSetupColumns() {
        const targetValues = ["bl", "aentries", "majesticseo_cf", "majesticseo_tf", "domainpop", "adddate"];
        const selected = document.querySelector('.selected.ui-sortable');
        const selections = document.querySelector('.selections');
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        const fire = (el, type, x, y) => {
            el.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, view: window, clientX: x, clientY: y, buttons: 1 }));
        };

        async function realDrag(item, targetIndex) {
            const start = item.getBoundingClientRect();
            const target = selected.children[targetIndex].getBoundingClientRect();
            const startX = start.left + start.width / 2;
            const startY = start.top + start.height / 2;
            const endX = target.left + target.width / 2;
            const endY = target.top + target.height / 2;
            fire(item, 'mousedown', startX, startY);
            await sleep(50);
            for (let i = 1; i <= 6; i++) {
                fire(document, 'mousemove', startX + (endX - startX) * (i / 6), startY + (endY - startY) * (i / 6));
                await sleep(30);
            }
            fire(document, 'mouseup', endX, endY);
            await sleep(100);
        }

        // 1. Очищення
        [...selected.querySelectorAll('.item')].forEach(i => {
            if (!targetValues.includes(i.dataset.value)) {
                i.querySelector('.remove-selected')?.click();
            }
        });
        await sleep(500);

        // 2. Додавання
        for (const v of targetValues) {
            if (!selected.querySelector(`.item[data-value="${v}"]`)) {
                selections.querySelector(`.item[data-value="${v}"]`)?.querySelector('input, label')?.click();
                await sleep(200);
            }
        }
        await sleep(500);

        // 3. Сортування
        for (let i = 0; i < targetValues.length; i++) {
            const item = selected.querySelector(`.item[data-value="${targetValues[i]}"]`);
            if (item && selected.children[i] !== item) {
                await realDrag(item, i);
            }
        }

        // БЕЗ автоматичного збереження - юзер сам натисне Save
    }

    // === ФУНКЦІЯ ВСТАНОВЛЕННЯ ФІЛЬТРІВ ===
    async function applyFilters() {
        const settings = loadFilterSettings();
        
        const setValue = (el, val, type = 'input') => {
            if (!el) return;
            const currentVal = el.type === 'checkbox' ? el.checked : el.value;
            if (currentVal === val) return;

            if (el.type === 'checkbox') {
                el.checked = val;
            } else {
                el.value = val;
            }

            el.dispatchEvent(new Event(type, { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        };

        const delay = (ms) => new Promise(res => setTimeout(res, ms));
        const shuffleArray = (arr) => {
            const shuffled = [...arr];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        };

        // ACR
        if (settings.acr_enable) {
            const facr = document.getElementById('facr');
            if (facr) {
                setValue(facr, settings.acr_value);
                await delay(50 + Math.random() * 100);
            }
        }

        // Limit
        if (settings.limit_enable) {
            const flimit = document.getElementById('flimit');
            if (flimit) {
                setValue(flimit, settings.limit_value);
                await delay(50 + Math.random() * 100);
            }
        }

        // Available
        if (settings.available_enable) {
            const fwhois = document.getElementById('fwhois');
            if (fwhois) {
                setValue(fwhois, true, 'click');
                await delay(50 + Math.random() * 100);
            }
        }

        // Exclude Make Offer
        if (settings.exclude_makeoffer_enable) {
            const fexclude = document.getElementById('fexcludemakeoffer');
            if (fexclude) {
                setValue(fexclude, true, 'click');
                await delay(50 + Math.random() * 100);
            }
        }

        // Період
        if (settings.period && settings.period !== '') {
            // Спочатку знімаємо всі періоди
            const allPeriods = ['flast12', 'flast24', 'flast48', 'flast168', 'flast14d', 'flast30d', 'flast60d', 'flast90d', 'flast120d', 'flast365d'];
            for (const p of allPeriods) {
                const el = document.getElementById(p);
                if (el && el.checked) {
                    setValue(el, false, 'click');
                    await delay(100);
                }
            }
            // Встановлюємо потрібний
            const periodEl = document.getElementById(settings.period);
            if (periodEl) {
                setValue(periodEl, true, 'click');
                await delay(50 + Math.random() * 100);
            }
        }

        // Contains (gambling)
        if (settings.contains_enable && settings.contains_list) {
            const fdomain = document.querySelector('input[name="fdomain"]');
            if (fdomain) {
                const words = settings.contains_list.split(/[\s\n,]+/).map(w => w.trim()).filter(w => w.length > 0);
                const shuffled = shuffleArray(words);
                setValue(fdomain, shuffled.join(' '));
                await delay(50 + Math.random() * 100);
            }
        }

        // Black zones
        if (settings.blackzone_enable && settings.blackzone_list) {
            const ftldsblock = document.querySelector('input[name="ftldsblock"]');
            if (ftldsblock) {
                const zones = settings.blackzone_list.split(/[\s\n,]+/).map(z => z.trim()).filter(z => z.length > 0);
                const shuffled = shuffleArray(zones);
                setValue(ftldsblock, shuffled.join(' '));
            }
        }
    }

    // Завантаження налаштувань фільтрів
    function loadFilterSettings() {
        const saved = localStorage.getItem('domain-grabber-filters');
        if (!saved) {
            return {
                acr_enable: true,
                acr_value: '1',
                available_enable: true,
                limit_enable: true,
                limit_value: '200',
                exclude_makeoffer_enable: true,
                period: 'flast168',
                contains_enable: false,
                contains_list: GAMBLING_WORDS.join(' '),
                blackzone_enable: true,
                blackzone_list: BLACK_ZONES.join(' ')
            };
        }
        try {
            const settings = JSON.parse(saved);
            // Якщо списки порожні, заповнюємо дефолтними
            if (!settings.contains_list) settings.contains_list = GAMBLING_WORDS.join(' ');
            if (!settings.blackzone_list) settings.blackzone_list = BLACK_ZONES.join(' ');
            return settings;
        } catch (e) {
            return {
                acr_enable: true,
                acr_value: '1',
                available_enable: true,
                limit_enable: true,
                limit_value: '200',
                exclude_makeoffer_enable: true,
                period: 'flast168',
                contains_enable: false,
                contains_list: GAMBLING_WORDS.join(' '),
                blackzone_enable: true,
                blackzone_list: BLACK_ZONES.join(' ')
            };
        }
    }

    // Збереження налаштувань фільтрів
    function saveFilterSettings() {
        const settings = {
            acr_enable: document.getElementById('filter_acr_enable')?.checked || false,
            acr_value: document.getElementById('filter_acr_value')?.value || '1',
            available_enable: document.getElementById('filter_available_enable')?.checked || false,
            limit_enable: document.getElementById('filter_limit_enable')?.checked || false,
            limit_value: document.getElementById('filter_limit_value')?.value || '200',
            exclude_makeoffer_enable: document.getElementById('filter_exclude_makeoffer_enable')?.checked || false,
            period: document.getElementById('filter_period')?.value || '',
            contains_enable: document.getElementById('filter_contains_enable')?.checked || false,
            contains_list: document.getElementById('filter_contains_list')?.value || '',
            blackzone_enable: document.getElementById('filter_blackzone_enable')?.checked || false,
            blackzone_list: document.getElementById('filter_blackzone_list')?.value || ''
        };
        localStorage.setItem('domain-grabber-filters', JSON.stringify(settings));
        
        // Оновлюємо лічильники
        updateFilterCounts();
    }

    // Оновлення лічильників слів
    function updateFilterCounts() {
        const gamblingList = document.getElementById('filter_contains_list')?.value || '';
        const blackzoneList = document.getElementById('filter_blackzone_list')?.value || '';
        
        const gamblingCount = gamblingList.split(/[\s\n,]+/).filter(w => w.trim().length > 0).length;
        const blackzoneCount = blackzoneList.split(/[\s\n,]+/).filter(w => w.trim().length > 0).length;
        
        const gamblingCountEl = document.getElementById('gambling_count');
        const blackzoneCountEl = document.getElementById('blackzone_count');
        
        if (gamblingCountEl) gamblingCountEl.textContent = gamblingCount;
        if (blackzoneCountEl) blackzoneCountEl.textContent = blackzoneCount;
    }

    function processDomains(mode = 'brands') {
        const onlyAva = document.getElementById('onlyAvailable').checked;
        const useYear = document.getElementById('useYearFilter').checked;
        const targetYear = parseInt(document.getElementById('yearValue').value) || 2020;
        
        // Отримуємо вибрані метрики
        const selectedMetrics = {
            bl: document.getElementById('metric_bl')?.checked || false,
            acr: document.getElementById('metric_acr')?.checked || false,
            cf: document.getElementById('metric_cf')?.checked || false,
            tf: document.getElementById('metric_tf')?.checked || false,
            dp: document.getElementById('metric_dp')?.checked || false
        };

        let searchBrands = [];
        if (mode === 'brands') {
            const brandsText = document.getElementById('brandInput')?.value || '';
            const brandRows = brandsText.split(/[\s\n,]+/).map(b => b.trim()).filter(b => b.length > 1);
            searchBrands = [...new Set(brandRows)].sort((a, b) => b.length - a.length);
        }

        let collectedData = [];
        const domainCells = document.querySelectorAll("td.field_domain");
        domainCells.forEach(cell => {
            try {
                const row = cell.closest('tr');
                if (!row) return;
                
                const domainEl = cell.querySelector("a");
                if (!domainEl) return;
                
                const domain = domainEl.innerText.trim().toLowerCase();
                
                if (onlyAva) {
                    // Шукаємо в field_whois2 або field_whois
                    const statusEl = row.querySelector(".field_whois2 a") || row.querySelector(".field_whois a");
                    const status = statusEl?.innerText.trim().toLowerCase();
                    if (status !== "available") {
                        return;
                    }
                }
                if (useYear) {
                    const dateText = row.querySelector(".field_adddate")?.innerText.trim();
                    const yearMatch = dateText ? dateText.match(/^\d{4}/) : null;
                    const year = yearMatch ? parseInt(yearMatch[0]) : 0;
                    if (year < targetYear) {
                        return;
                    }
                }
                const getStat = (cls) => {
                    const el = row.querySelector(`.${cls}`);
                    return el ? parseInt(el.innerText.replace(/[^0-9]/g, '')) || 0 : 0;
                };
                
                let matchedBrand = "";
                
                if (mode === 'drop') {
                    // Режим DROP - завжди "DROP"
                    matchedBrand = "DROP";
                } else if (mode === 'brands') {
                    // Режим BRANDS - шукаємо співпадіння, якщо не знайдено = пустота
                    if (searchBrands.length > 0) {
                        const cleanDomain = domain.replace(/[^a-z0-9]/g, "");
                        for (let b of searchBrands) {
                            if (cleanDomain.includes(b.toLowerCase().replace(/[^a-z0-9]/g, ""))) {
                                matchedBrand = b;
                                break;
                            }
                        }
                    }
                    // Якщо не знайдено - matchedBrand залишається ""
                }
                
                // Збираємо тільки вибрані метрики
                const domainData = { domain, brand: matchedBrand };
                if (selectedMetrics.bl) domainData.bl = getStat("field_bl");
                if (selectedMetrics.acr) domainData.acr = getStat("field_aentries");
                if (selectedMetrics.cf) domainData.cf = getStat("field_majesticseo_cf");
                if (selectedMetrics.tf) domainData.tf = getStat("field_majesticseo_tf");
                if (selectedMetrics.dp) domainData.dp = getStat("field_domainpop");
                
                collectedData.push(domainData);
            } catch (e) {
                // Ігноруємо помилки
            }
        });
        return collectedData.sort((a, b) => {
            // В режимі DROP сортуємо тільки по домену
            if (mode === 'drop') {
                return a.domain.localeCompare(b.domain);
            }
            // В режимі BRANDS сортуємо по бренду, потім по домену
            return (a.brand && !b.brand) ? -1 : (!a.brand && b.brand) ? 1 : a.brand.localeCompare(b.brand) || a.domain.localeCompare(b.domain);
        });
    }

    function copyToClipboard(text, msg) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(msg, 'success');
        }).catch(err => {
            showNotification('❌ Помилка копіювання!\n\n' + err.message, 'error');
        });
    }

    // Збереження налаштувань
    function saveSettings() {
        const settings = {
            mode: document.querySelector('.mode-switch button.active')?.id === 'modeBrands' ? 'brands' : 'drop',
            exportFormat: document.querySelector('input[name="exportFormat"]:checked')?.value || 'json',
            metrics: {
                bl: document.getElementById('metric_bl')?.checked || false,
                acr: document.getElementById('metric_acr')?.checked || false,
                cf: document.getElementById('metric_cf')?.checked || false,
                tf: document.getElementById('metric_tf')?.checked || false,
                dp: document.getElementById('metric_dp')?.checked || false
            },
            filters: {
                onlyAvailable: document.getElementById('onlyAvailable')?.checked || false,
                useYearFilter: document.getElementById('useYearFilter')?.checked || false,
                yearValue: document.getElementById('yearValue')?.value || '2020'
            },
            brands: document.getElementById('brandInput')?.value || ''
        };
        localStorage.setItem('domain-grabber-settings', JSON.stringify(settings));
    }

    // Завантаження налаштувань
    function loadSettings() {
        const saved = localStorage.getItem('domain-grabber-settings');
        if (!saved) return null;
        try {
            return JSON.parse(saved);
        } catch (e) {
            return null;
        }
    }
})();