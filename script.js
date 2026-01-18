// Magic Rocks Configuration
const MAGIC_ROCKS = [
    { 
        key: 'Thunderheart', 
        name: '雷霆魔法石', 
        icon: '⚡',
        image: 'Thunderheart.png',
        description: '蘊含狂暴雷電之力，能瞬間喚醒沉睡的力量，象徵速度與決斷。'
    },
    { 
        key: 'Frostveil', 
        name: '冰霜魔法石', 
        icon: '❄️',
        image: 'Frostveil.png',
        description: '散發極寒氣息，可凍結時間般地減緩一切變化，象徵冷靜與理智。'
    },
    { 
        key: 'Vinescourge', 
        name: '毒藤魔法石', 
        icon: '🌿',
        image: 'Vinescourge.png',
        description: '以暗綠毒霧纏繞，能腐蝕束縛敵人，也提醒持有者慎用其力。'
    },
    { 
        key: 'Shadow Abyss', 
        name: '暗影魔法石', 
        icon: '🌑',
        image: 'Shadow Abyss.png',
        description: '如深淵般吸收光芒，讓持有者在黑暗中隱匿身形，象徵秘密與未知。'
    },
    { 
        key: 'Lumen Grace', 
        name: '光輝魔法石', 
        icon: '✨',
        image: 'Lumen Grace.png',
        description: '綻放聖潔光芒，能淨化邪惡與治癒創傷，象徵希望與重生。'
    },
    { 
        key: 'Chronora', 
        name: '時空魔法石', 
        icon: '⏰',
        image: 'Chronora.png',
        description: '掌控時間流動的神秘力量，能穿越過去與未來，象徵永恆與輪迴。'
    }
];

// Distraction Items Configuration (干擾項)
const DISTRACTION_ITEMS = [
    {
        key: 'Element Bell',
        name: '元素鈴鐺',
        icon: '🔔',
        image: 'Element Bell.png',
        description: '能召喚元素精靈的魔法鈴鐺，搖響時會散發四大元素的光芒。'
    },
    {
        key: 'Magic Astrolabe',
        name: '魔法羅盤',
        icon: '🧭',
        image: 'Magic Astrolabe.png',
        description: '用於觀測星象的魔法羅盤，能預測元素變化與魔法流向。'
    },
    {
        key: 'Element Key',
        name: '元素鑰匙',
        icon: '🗝️',
        image: 'Element Key.png',
        description: '能開啟元素之門的神秘鑰匙，閃爍著四大元素的色彩。'
    },
    {
        key: 'Magic Lens',
        name: '魔法鏡片',
        icon: '🔍',
        image: 'Magic Lens.png',
        description: '能看穿魔法偽裝的鏡片，揭示隱藏在現實中的魔法真相。'
    },
    {
        key: 'Magic Talisman',
        name: '魔法護符',
        icon: '🛡️',
        image: 'Magic Talisman.png',
        description: '具有強大保護力量的護符，能抵禦邪惡侵襲並平衡元素之力。'
    },
    {
        key: 'Element Seed',
        name: '元素種子',
        icon: '🌱',
        image: 'Element Seed.png',
        description: '蘊含生命力的魔法種子，能生長出奇異的元素植物。'
    },
    {
        key: 'Magic Bookmark',
        name: '魔法書籤',
        icon: '📖',
        image: 'Magic Bookmark.png',
        description: '能自動翻到所需頁面的魔法書籤，指引知識之路。'
    },
    {
        key: 'Element Fragment',
        name: '元素碎片',
        icon: '💎',
        image: 'Element Fragment.png',
        description: '破碎的元素結晶，仍保留著微弱的元素力量。'
    },
    {
        key: 'Magic Potion',
        name: '魔法藥劑瓶',
        icon: '🧪',
        image: 'Magic Potion.png',
        description: '裝載神秘彩虹藥劑的瓶子，散發著奇異的魔法香氣。'
    },
    {
        key: 'Element Rune',
        name: '元素符石',
        icon: '🔮',
        image: 'Element Rune.png',
        description: '刻有元素符文的石頭，能引導並平衡四大元素之力。'
    },
    {
        key: 'Magic Scroll',
        name: '魔法卷軸',
        icon: '📜',
        image: 'Magic Scroll.png',
        description: '記載古老魔法知識的卷軸，散發著智慧與神秘氣息。'
    },
    {
        key: 'Element Crystal',
        name: '元素水晶',
        icon: '💠',
        image: 'Element Crystal.png',
        description: '蘊含四大元素力量的水晶，閃爍著神秘而平衡的光芒。'
    },
    {
        key: 'Magic Quill',
        name: '魔法羽毛筆',
        icon: '✍️',
        image: 'Magic Quill.png',
        description: '用於書寫魔法咒語的羽毛筆，蘊含書寫之力與創造能量。'
    }
];

// Get DOM elements
const greeting = document.getElementById('greeting');
const message = document.getElementById('message');
const button = document.getElementById('clickButton');
const rocksGrid = document.getElementById('rocksGrid');
const scannerModal = document.getElementById('scannerModal');
const closeScanner = document.getElementById('closeScanner');
const messagePopup = document.getElementById('messagePopup');
const pandoraBox = document.getElementById('pandoraBox');
const rockInfoModal = document.getElementById('rockInfoModal');
const rockInfoConfirmBtn = document.getElementById('rockInfoConfirmBtn');
const rockInfoImage = document.getElementById('rockInfoImage');
const rockInfoName = document.getElementById('rockInfoName');
const rockInfoDescription = document.getElementById('rockInfoDescription');
const openBoxButton = document.getElementById('openBoxButton');
const bagContainer = document.getElementById('bagContainer');
const bagImage = document.getElementById('bagImage');
const rocksContent = document.getElementById('rocksContent');
const noRocksMessage = document.getElementById('noRocksMessage');
const openBagBtn = document.getElementById('openBagBtn');
const backBtn = document.getElementById('backBtn');
const bagImageMain = document.getElementById('bagImageMain');
const resetBtn = document.getElementById('resetBtn');
const particlesMain = document.getElementById('particlesMain');
const welcomeWarningModal = document.getElementById('welcomeWarningModal');
const welcomeWarningConfirmBtn = document.getElementById('welcomeWarningConfirmBtn');

// Load collected rocks from localStorage
let collectedRocks = JSON.parse(localStorage.getItem('collectedRocks')) || [];
let collectedDistractions = JSON.parse(localStorage.getItem('collectedDistractions')) || [];
let qrScanner = null;

// Initialize the rocks display
function initializeRocks() {
    rocksGrid.innerHTML = '';
    
    // Show collected rocks
    MAGIC_ROCKS.forEach((rock, index) => {
        const isCollected = collectedRocks.includes(rock.key);
        
        // Only create and display if collected
        if (isCollected) {
            const rockSlot = document.createElement('div');
            rockSlot.className = 'rock-slot collected';
            rockSlot.dataset.rock = rock.key;
            
            rockSlot.innerHTML = `
                <div class="rock-icon">${rock.icon}</div>
                <div class="rock-name">${rock.name}</div>
                <div class="rock-status">已收集</div>
            `;
            
            // Add click event for collected rocks
            rockSlot.style.cursor = 'pointer';
            rockSlot.addEventListener('click', function() {
                showRockInfo(rock);
            });
            
            rocksGrid.appendChild(rockSlot);
        }
    });
    
    // Show collected distraction items
    DISTRACTION_ITEMS.forEach((item, index) => {
        const isCollected = collectedDistractions.includes(item.key);
        
        // Only create and display if collected
        if (isCollected) {
            const itemSlot = document.createElement('div');
            itemSlot.className = 'rock-slot collected distraction-item';
            itemSlot.dataset.item = item.key;
            
            itemSlot.innerHTML = `
                <div class="rock-icon">${item.icon}</div>
                <div class="rock-name">${item.name}</div>
                <div class="rock-status">已收集</div>
            `;
            
            // Add click event for collected items
            itemSlot.style.cursor = 'pointer';
            itemSlot.addEventListener('click', function() {
                showDistractionItemInfo(item);
            });
            
            rocksGrid.appendChild(itemSlot);
        }
    });
    
    updateProgress();
    checkBoxOpening();
    
    // Ensure bag is closed initially
    if (rocksContent) {
        rocksContent.style.display = 'none';
    }
    if (openBagBtn) {
        openBagBtn.style.display = 'block';
    }
}

// Update progress text (removed - no longer displaying progress)
function updateProgress() {
    // Progress display removed
}

// Check if box should open
function checkBoxOpening() {
    if (collectedRocks.length === 6) {
        pandoraBox.classList.add('box-open');
        message.textContent = '恭喜！潘多拉盒子已打開！';
        // Keep the collect button visible
        button.style.display = 'block';
        openBoxButton.style.display = 'block';
    } else {
        openBoxButton.style.display = 'none';
    }
}

// Reset function - clear all collected items
function resetGame() {
    // Ask for password
    const password = prompt('請輸入密碼以重置遊戲：');
    
    // Check password
    if (password === '0125') {
        // Clear collected items
        collectedRocks = [];
        collectedDistractions = [];
        
        // Clear localStorage
        localStorage.setItem('collectedRocks', JSON.stringify([]));
        localStorage.setItem('collectedDistractions', JSON.stringify([]));
        // Also clear welcome warning flag so it shows again after reset
        localStorage.removeItem('hasSeenWelcomeWarning');
        
        // Reset UI
        initializeRocks();
        checkBoxOpening();
        
        // Reset box state
        if (pandoraBox) {
            pandoraBox.classList.remove('box-open');
        }
        if (greeting) {
            greeting.textContent = '潘多拉盒子';
        }
        if (message) {
            message.textContent = '集齊魔法石便可把盒子打開';
        }
        
        // Close bag if open
        if (rocksContent && rocksContent.style.display !== 'none') {
            closeBag();
        }
        
        // Reset image
        if (pandoraBox) pandoraBox.style.display = 'block';
        if (bagImageMain) bagImageMain.style.display = 'none';
        
        showMessage('遊戲已重置', 'success');
    } else if (password !== null) {
        // User entered wrong password (not cancelled)
        showMessage('密碼錯誤', 'error');
    }
    // If password is null, user cancelled - do nothing
}

// Show message popup
function showMessage(text, type = 'info') {
    messagePopup.textContent = text;
    messagePopup.className = `message-popup ${type} show`;
    
    setTimeout(() => {
        messagePopup.classList.remove('show');
    }, 2000);
}

// Show rock collection info
function showRockInfo(rock) {
    // Hide buttons initially
    rockInfoConfirmBtn.style.display = 'none';
    
    // Set content
    rockInfoImage.alt = rock.name;
    rockInfoName.textContent = rock.name;
    rockInfoDescription.textContent = rock.description;
    
    // Show modal first
    rockInfoModal.classList.add('active');
    
    // Load image and show confirm button when image is loaded
    rockInfoImage.onload = function() {
        rockInfoConfirmBtn.style.display = 'block';
    };
    
    // Set image source (this will trigger onload)
    rockInfoImage.src = rock.image;
    
    // Fallback: if image fails to load or is cached, show button after a short delay
    setTimeout(() => {
        if (rockInfoImage.complete) {
            rockInfoConfirmBtn.style.display = 'block';
        }
    }, 100);
}

// Show distraction item info (collectible but not a magic rock)
function showDistractionItemInfo(item) {
    isShowingDistraction = true;
    
    rockInfoConfirmBtn.style.display = 'none';
    
    // Set content
    rockInfoImage.alt = item.name;
    rockInfoName.textContent = item.name;
    
    // Create description with warning message
    const descriptionHTML = `${item.description}<br><br><span style="color: #e74c3c; font-weight: bold; font-size: 1.1rem;">⚠️ 這不是魔法石，請繼續尋找！</span>`;
    rockInfoDescription.innerHTML = descriptionHTML;
    
    // Show modal first
    rockInfoModal.classList.add('active');
    
    // Load image and show confirm button when image is loaded
    rockInfoImage.onload = function() {
        rockInfoConfirmBtn.style.display = 'block';
    };
    
    // Set image source (this will trigger onload)
    rockInfoImage.src = item.image;
    
    // Fallback: if image fails to load or is cached, show button after a short delay
    setTimeout(() => {
        if (rockInfoImage.complete) {
            rockInfoConfirmBtn.style.display = 'block';
        }
    }, 100);
}

// Close rock info modal
function closeRockInfoModal() {
    rockInfoModal.classList.remove('active');
    // Hide buttons when modal is closed
    rockInfoConfirmBtn.style.display = 'none';
    isShowingDistraction = false;
    
    // Auto-open bag view after closing item info (if bag is not already open)
    if (rocksContent && rocksContent.style.display === 'none') {
        setTimeout(() => {
            openBag();
        }, 300);
    }
}

// Track if we're showing a distraction item
let isShowingDistraction = false;

// Open QR Scanner
function openScanner() {
    scannerModal.classList.add('active');
    
    // Initialize QR Scanner
    qrScanner = new Html5Qrcode("qr-reader");
    
    // Get viewport dimensions for responsive QR box
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const qrBoxSize = Math.min(viewportWidth * 0.8, viewportHeight * 0.5, 300);
    
    qrScanner.start(
        { facingMode: "environment" }, // Use back camera
        {
            fps: 10,
            qrbox: { width: qrBoxSize, height: qrBoxSize },
            aspectRatio: 1.0
        },
        (decodedText, decodedResult) => {
            // Successfully scanned
            handleScannedCode(decodedText);
        },
        (errorMessage) => {
            // Error ignored for continuous scanning
        }
    ).catch((err) => {
        console.error("Unable to start scanning", err);
        showMessage('無法啟動相機，請檢查權限設定', 'error');
        closeScannerModal();
    });
}

// Close QR Scanner
function closeScannerModal() {
    if (qrScanner) {
        qrScanner.stop().then(() => {
            qrScanner.clear();
            qrScanner = null;
        }).catch((err) => {
            console.error("Error stopping scanner", err);
        });
    }
    scannerModal.classList.remove('active');
}

// Handle scanned QR code
function handleScannedCode(scannedText) {
    // Normalize the scanned text (trim and handle variations)
    const normalizedText = scannedText.trim();
    
    // Check if it matches any magic rock key
    const rock = MAGIC_ROCKS.find(r => 
        r.key.toLowerCase() === normalizedText.toLowerCase() ||
        r.key.replace(/\s+/g, '').toLowerCase() === normalizedText.replace(/\s+/g, '').toLowerCase()
    );
    
    if (rock) {
        // Check if already collected
        if (collectedRocks.includes(rock.key)) {
            showMessage(`${rock.name} 已經收集過了！`, 'info');
            return;
        }
        
        // Add to collected rocks
        collectedRocks.push(rock.key);
        localStorage.setItem('collectedRocks', JSON.stringify(collectedRocks));
        
        // Update display
        initializeRocks();
        
        // Close scanner first
        closeScannerModal();
        
        // Show rock info modal after a short delay
        setTimeout(() => {
            showRockInfo(rock);
        }, 500);
        
        // Auto-open bag view after collecting item
        // Wait for rock info modal to be shown first, then open bag after user closes it
        // We'll handle this in closeRockInfoModal function
        
    } else {
        // Check if it matches any distraction item
        const distractionItem = DISTRACTION_ITEMS.find(item => 
            item.key.toLowerCase() === normalizedText.toLowerCase() ||
            item.key.replace(/\s+/g, '').toLowerCase() === normalizedText.replace(/\s+/g, '').toLowerCase()
        );
        
        if (distractionItem) {
            // Check if already collected
            if (collectedDistractions.includes(distractionItem.key)) {
                showMessage(`${distractionItem.name} 已經收集過了！`, 'info');
                return;
            }
            
            // Add to collected distractions
            collectedDistractions.push(distractionItem.key);
            localStorage.setItem('collectedDistractions', JSON.stringify(collectedDistractions));
            
            // Update display
            initializeRocks();
            
            // Close scanner first
            closeScannerModal();
            
            // Show distraction item info after a short delay
            setTimeout(() => {
                showDistractionItemInfo(distractionItem);
            }, 500);
        } else {
            showMessage('無效的物品！', 'error');
        }
    }
}

// Event Listeners
button.addEventListener('click', function() {
    // Allow scanning even after collecting all rocks (for distraction items)
    openScanner();
});

closeScanner.addEventListener('click', closeScannerModal);

// Close scanner when clicking outside
scannerModal.addEventListener('click', function(e) {
    if (e.target === scannerModal) {
        closeScannerModal();
    }
});

// Close rock info modal with confirm button
rockInfoConfirmBtn.addEventListener('click', closeRockInfoModal);

// Reset button
if (resetBtn) {
    resetBtn.addEventListener('click', resetGame);
}

// Open box button
openBoxButton.addEventListener('click', function() {
    window.location.href = 'box.html';
});

// Open bag to show collected rocks
function openBag() {
    rocksContent.style.display = 'block';
    openBagBtn.style.display = 'none';
    bagContainer.style.display = 'none'; // Hide bag container
    
    // Replace pandora.png with justbox.png in image-container
    if (pandoraBox) pandoraBox.style.display = 'none';
    if (bagImageMain) bagImageMain.style.display = 'block';
    
    // Create particles for the main image container
    createParticlesMain();
    
    // Update title and message
    if (greeting) greeting.textContent = '收集布袋';
    if (message) message.textContent = '以下是已收集的物品';
    
    // Check if there are collected rocks
    const h3Element = rocksContent.querySelector('h3');
            const totalCollected = collectedRocks.length + collectedDistractions.length;
            
            if (totalCollected === 0) {
                // Show no items message
                if (h3Element) h3Element.style.display = 'none';
                if (noRocksMessage) noRocksMessage.style.display = 'block';
                if (rocksGrid) rocksGrid.style.display = 'none';
            } else {
                // Show collected items
                if (h3Element) h3Element.style.display = 'block';
                if (noRocksMessage) noRocksMessage.style.display = 'none';
                if (rocksGrid) rocksGrid.style.display = 'grid';
            }
}

// Close bag
function closeBag() {
    rocksContent.style.display = 'none';
    openBagBtn.style.display = 'block';
    bagContainer.style.display = 'block'; // Show bag container
    
    // Restore pandora.png in image-container
    if (pandoraBox) pandoraBox.style.display = 'block';
    if (bagImageMain) bagImageMain.style.display = 'none';
    
    // Clear particles from main image container
    if (particlesMain) particlesMain.innerHTML = '';
    
    // Restore original title and message
    if (greeting) greeting.textContent = '潘多拉盒子';
    if (message) message.textContent = '集齊魔法石便可把盒子打開';
}

// Create particle effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        // Position particles more spread out around the bag
        // Use much wider distribution - from 0% to 100% of container
        // Use different distribution patterns to avoid clustering
        const angle = (i / 15) * Math.PI * 2; // Distribute in a circle
        const radius = 30 + Math.random() * 20; // Random radius between 30-50%
        const centerX = 50; // Center of container
        const centerY = 50;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Create particle effect for main image container (collected page)
function createParticlesMain() {
    if (!particlesMain) return;
    
    particlesMain.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        // Position particles more spread out around the bag
        const angle = (i / 15) * Math.PI * 2; // Distribute in a circle
        const radius = 30 + Math.random() * 20; // Random radius between 30-50%
        const centerX = 50; // Center of container
        const centerY = 50;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 1.5 + 2) + 's';
        particlesMain.appendChild(particle);
    }
}

// Open bag button
if (openBagBtn) {
    openBagBtn.addEventListener('click', openBag);
}

// Back button
if (backBtn) {
    backBtn.addEventListener('click', closeBag);
}

// Show welcome warning on first visit
function showWelcomeWarning() {
    // Check if warning has been shown before
    const hasSeenWarning = localStorage.getItem('hasSeenWelcomeWarning');
    
    if (!hasSeenWarning && welcomeWarningModal) {
        welcomeWarningModal.classList.add('active');
    }
}

// Close welcome warning
function closeWelcomeWarning() {
    if (welcomeWarningModal) {
        welcomeWarningModal.classList.remove('active');
        // Mark as seen
        localStorage.setItem('hasSeenWelcomeWarning', 'true');
    }
}

// Initialize on page load
initializeRocks();
createParticles();
showWelcomeWarning();

// Welcome warning confirm button
if (welcomeWarningConfirmBtn) {
    welcomeWarningConfirmBtn.addEventListener('click', closeWelcomeWarning);
}

// Add smooth transition to greeting
greeting.style.transition = 'transform 0.2s ease';

console.log('潘多拉盒子網站已載入！');
