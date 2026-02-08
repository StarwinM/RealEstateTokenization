const ESTATE_TOKEN_ADDRESS = '';
const PROPERTY_TOKEN_ADDRESS = '';

const ESTATE_TOKEN_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
            { "indexed": false, "internalType": "string", "name": "title", "type": "string" },
            { "indexed": false, "internalType": "uint256", "name": "totalValue", "type": "uint256" },
            { "indexed": false, "internalType": "uint256", "name": "deadline", "type": "uint256" }
        ],
        "name": "CampaignCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
            { "indexed": false, "internalType": "address", "name": "contributor", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
        ],
        "name": "ContributionMade",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
            { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
        ],
        "name": "FundsWithdrawn",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "campaignCount",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
        "name": "contribute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" },
            { "internalType": "address", "name": "", "type": "address" }
        ],
        "name": "contributions",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "string", "name": "_title", "type": "string" },
            { "internalType": "uint256", "name": "_target", "type": "uint256" },
            { "internalType": "uint256", "name": "_duration", "type": "uint256" }
        ],
        "name": "createCampaign",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "_id", "type": "uint256" },
            { "internalType": "address", "name": "_user", "type": "address" }
        ],
        "name": "getContribution",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPropertyCount",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
        "name": "getPropertyFinancials",
        "outputs": [
            { "internalType": "uint256", "name": "totalValue", "type": "uint256" },
            { "internalType": "uint256", "name": "tokenSupply", "type": "uint256" },
            { "internalType": "uint256", "name": "tokensAvailable", "type": "uint256" },
            { "internalType": "uint256", "name": "raisedAmount", "type": "uint256" },
            { "internalType": "uint256", "name": "minInvestment", "type": "uint256" },
            { "internalType": "uint256", "name": "deadline", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
        "name": "getPropertyInfo",
        "outputs": [
            { "internalType": "string", "name": "name", "type": "string" },
            { "internalType": "string", "name": "location", "type": "string" },
            { "internalType": "string", "name": "propertyType", "type": "string" },
            { "internalType": "string", "name": "description", "type": "string" },
            { "internalType": "address", "name": "owner", "type": "address" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
        "name": "getPropertyStatus",
        "outputs": [
            { "internalType": "bool", "name": "fullyFunded", "type": "bool" },
            { "internalType": "bool", "name": "ended", "type": "bool" },
            { "internalType": "bool", "name": "finalized", "type": "bool" }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
        "name": "invest",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardToken",
        "outputs": [{ "internalType": "contract RealEstateToken", "name": "", "type": "address" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "string", "name": "_title", "type": "string" },
            { "internalType": "string", "name": "_location", "type": "string" },
            { "internalType": "string", "name": "_propertyType", "type": "string" },
            { "internalType": "string", "name": "_description", "type": "string" },
            { "internalType": "uint256", "name": "_totalValue", "type": "uint256" },
            { "internalType": "uint256", "name": "_tokenSupply", "type": "uint256" },
            { "internalType": "uint256", "name": "_minInvestment", "type": "uint256" },
            { "internalType": "uint256", "name": "_duration", "type": "uint256" }
        ],
        "name": "tokenizeProperty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const PROPERTY_TOKEN_ABI = [
    {
        "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
        "stateMutability": "view",
        "type": "function"
    }
];

const PROPERTY_COLORS = {
    'Residential': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'Commercial': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'Industrial': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'Land': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'Mixed-Use': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
};

let web3;
let account;
let estateContract;
let propertyTokenContract;
let properties = [];

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showToast('Please install MetaMask to use this application', 'error');
        return;
    }

    try {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        account = accounts[0];
        web3 = new Web3(window.ethereum);

        const chainId = await web3.eth.getChainId();
        const networkName = getNetworkName(Number(chainId));

        document.getElementById('network').textContent = networkName;
        document.getElementById('walletAddress').textContent =
            account.substring(0, 8) + '...' + account.substring(36);
        document.getElementById('connectBtn').textContent = 'Connected';
        document.getElementById('connectBtn').disabled = true;

        estateContract = new web3.eth.Contract(ESTATE_TOKEN_ABI, ESTATE_TOKEN_ADDRESS);
        propertyTokenContract = new web3.eth.Contract(PROPERTY_TOKEN_ABI, PROPERTY_TOKEN_ADDRESS);

        await loadAllData();

        showToast('Wallet connected successfully', 'success');

        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', () => window.location.reload());

    } catch (error) {
        console.error('Error connecting wallet:', error);
        showToast('Failed to connect wallet: ' + error.message, 'error');
    }
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        showToast('Please connect to MetaMask', 'error');
        location.reload();
    } else if (accounts[0] !== account) {
        account = accounts[0];
        location.reload();
    }
}

function getNetworkName(chainId) {
    const networks = {
        1: 'Ethereum Mainnet',
        11155111: 'Sepolia Testnet',
        17000: 'Holesky Testnet',
        1337: 'Local Network',
        31337: 'Hardhat Local'
    };
    return networks[chainId] || `Network ${chainId}`;
}

async function loadAllData() {
    if (!estateContract || !propertyTokenContract) return;

    try {
        await Promise.all([
            loadProperties(),
            loadUserStats()
        ]);
    } catch (error) {
        console.error('Error loading data:', error);
        showToast('Error loading data: ' + error.message, 'error');
    }
}

async function loadProperties() {
    try {
        const propertyCount = await estateContract.methods.getPropertyCount().call();

        properties = [];
        for (let i = 0; i < Number(propertyCount); i++) {
            const [info, financials, status] = await Promise.all([
                estateContract.methods.getPropertyInfo(i).call(),
                estateContract.methods.getPropertyFinancials(i).call(),
                estateContract.methods.getPropertyStatus(i).call()
            ]);

            properties.push({
                id: i,
                name: info.name,
                location: info.location,
                propertyType: info.propertyType,
                description: info.description,
                owner: info.owner,
                totalValue: financials.totalValue.toString(),
                tokenSupply: Number(financials.tokenSupply),
                tokensAvailable: Number(financials.tokensAvailable),
                raisedAmount: financials.raisedAmount.toString(),
                minInvestment: financials.minInvestment.toString(),
                deadline: Number(financials.deadline),
                fullyFunded: status.fullyFunded,
                ended: status.ended
            });
        }

        renderProperties();
        updateStats();
    } catch (error) {
        console.error('Error loading properties:', error);
        document.getElementById('propertiesGrid').innerHTML = `
            <div class="empty-state">
                <h3 class="empty-title">No Properties Available</h3>
                <p class="empty-text">Be the first to tokenize a property</p>
            </div>
        `;
    }
}

async function loadUserStats() {
    try {
        const balance = await propertyTokenContract.methods.balanceOf(account).call();
        const tokenBalance = web3.utils.fromWei(balance, 'ether');
        document.getElementById('userTokens').textContent = parseFloat(tokenBalance).toFixed(2);

        const ethBalance = await web3.eth.getBalance(account);
        const ethBalanceFormatted = parseFloat(web3.utils.fromWei(ethBalance, 'ether')).toFixed(4);
        document.getElementById('ethBalance').textContent = ethBalanceFormatted;
    } catch (error) {
        console.error('Error loading user stats:', error);
    }
}

function updateStats() {
    const total = properties.length;
    const active = properties.filter(p => !p.fullyFunded && !p.ended).length;
    const totalValue = properties.reduce((sum, p) => {
        return sum + parseFloat(web3.utils.fromWei(p.totalValue || '0', 'ether'));
    }, 0);

    document.getElementById('totalProperties').textContent = total;
    document.getElementById('activeProperties').textContent = active;
    document.getElementById('totalValue').textContent = totalValue.toFixed(2);
}

function renderProperties() {
    const grid = document.getElementById('propertiesGrid');

    if (properties.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <h3 class="empty-title">No Properties Available</h3>
                <p class="empty-text">Check back soon for new investment opportunities</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = properties.map(property => {
        const raised = parseFloat(web3.utils.fromWei(property.raisedAmount || '0', 'ether'));
        const total = parseFloat(web3.utils.fromWei(property.totalValue || '0', 'ether'));
        const progress = total > 0 ? Math.min((raised / total) * 100, 100) : 0;
        const isActive = !property.fullyFunded && !property.ended;

        const statusClass = property.fullyFunded ? 'funded' : (isActive ? 'active' : 'closed');
        const statusText = property.fullyFunded ? 'Fully Funded' : (isActive ? 'Active' : 'Closed');

        const gradient = PROPERTY_COLORS[property.propertyType] || PROPERTY_COLORS['Residential'];

        return `
            <div class="property-card">
                <div class="property-image" style="background: ${gradient}">
                    <div class="property-badge">${property.propertyType || 'Residential'}</div>
                </div>
                <div class="property-content">
                    <div class="property-location">${property.location || 'Location TBD'}</div>
                    <h3 class="property-title">${property.name || 'Unnamed Property'}</h3>
                    <p class="property-description">${property.description || 'No description available.'}</p>

                    <div class="property-details">
                        <div class="detail-item">
                            <div class="detail-label">Value</div>
                            <div class="detail-value">${total.toFixed(2)} <span style="font-size: 0.8rem;">ETH</span></div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Tokens</div>
                            <div class="detail-value">${property.tokensAvailable}/${property.tokenSupply}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Min Buy</div>
                            <div class="detail-value">${web3.utils.fromWei(property.minInvestment || '0', 'ether')} <span style="font-size: 0.8rem;">ETH</span></div>
                        </div>
                    </div>

                    <div class="progress-section">
                        <div class="progress-header">
                            <span class="progress-label">Funding Progress</span>
                            <span class="progress-percentage">${progress.toFixed(1)}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <span class="status-badge ${statusClass}">${statusText}</span>
                        <span style="font-size: 0.85rem; color: var(--text-light);">
                            <strong style="color: var(--accent);">${raised.toFixed(3)}</strong> / ${total.toFixed(2)} ETH
                        </span>
                    </div>

                    ${isActive ? `
                        <div class="investment-section">
                            <input type="number"
                                   class="invest-input"
                                   placeholder="Amount (ETH)"
                                   step="0.01"
                                   min="${web3.utils.fromWei(property.minInvestment || '0', 'ether')}"
                                   id="invest-${property.id}">
                            <button class="invest-btn" onclick="investInProperty(${property.id})">
                                Invest
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');

    if (!account || properties.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <h3 class="empty-title">No Investments Yet</h3>
                <p class="empty-text">Start investing in tokenized real estate to build your portfolio</p>
            </div>
        `;
        return;
    }

    loadPortfolio(grid);
}

async function loadPortfolio(grid) {
    try {
        const portfolioItems = [];

        for (let i = 0; i < properties.length; i++) {
            const contribution = await estateContract.methods
                .getContribution(i, account).call();

            if (Number(contribution) > 0) {
                portfolioItems.push({
                    ...properties[i],
                    myContribution: contribution.toString()
                });
            }
        }

        if (portfolioItems.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <h3 class="empty-title">No Investments Yet</h3>
                    <p class="empty-text">Start investing in tokenized real estate to build your portfolio</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = portfolioItems.map(property => {
            const raised = parseFloat(web3.utils.fromWei(property.raisedAmount || '0', 'ether'));
            const total = parseFloat(web3.utils.fromWei(property.totalValue || '0', 'ether'));
            const myContrib = parseFloat(web3.utils.fromWei(property.myContribution || '0', 'ether'));
            const progress = total > 0 ? Math.min((raised / total) * 100, 100) : 0;
            const myShare = total > 0 ? ((myContrib / total) * 100).toFixed(1) : '0.0';
            const myTokens = total > 0 ? Math.floor((myContrib / total) * property.tokenSupply) : 0;
            const gradient = PROPERTY_COLORS[property.propertyType] || PROPERTY_COLORS['Residential'];

            return `
                <div class="property-card">
                    <div class="property-image" style="background: ${gradient}">
                        <div class="property-badge">${property.propertyType || 'Residential'}</div>
                    </div>
                    <div class="property-content">
                        <div class="property-location">${property.location || 'Location TBD'}</div>
                        <h3 class="property-title">${property.name || 'Unnamed Property'}</h3>

                        <div class="property-details">
                            <div class="detail-item">
                                <div class="detail-label">Your Share</div>
                                <div class="detail-value">${myShare}<span style="font-size: 0.8rem;">%</span></div>
                            </div>
                            <div class="detail-item">
                                <div class="detail-label">Tokens Owned</div>
                                <div class="detail-value">${myTokens}</div>
                            </div>
                            <div class="detail-item">
                                <div class="detail-label">Invested</div>
                                <div class="detail-value">${myContrib.toFixed(3)}<span style="font-size: 0.8rem;">ETH</span></div>
                            </div>
                        </div>

                        <div class="progress-section">
                            <div class="progress-header">
                                <span class="progress-label">Funding Progress</span>
                                <span class="progress-percentage">${progress.toFixed(1)}%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error('Error loading portfolio:', error);
        grid.innerHTML = `
            <div class="empty-state">
                <h3 class="empty-title">Error Loading Portfolio</h3>
                <p class="empty-text">${error.message}</p>
            </div>
        `;
    }
}

async function createProperty(e) {
    e.preventDefault();

    if (!account) {
        showToast('Please connect your wallet first', 'error');
        return;
    }

    const name = document.getElementById('propertyName').value;
    const location = document.getElementById('propertyLocation').value;
    const propertyType = document.getElementById('propertyType').value;
    const description = document.getElementById('propertyDescription').value;
    const value = document.getElementById('propertyValue').value;
    const tokenSupply = document.getElementById('tokenSupply').value;
    const minInvestment = document.getElementById('minInvestment').value;
    const duration = document.getElementById('fundingDuration').value;

    if (!name || !location || !value || !tokenSupply || !minInvestment || !duration) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    try {
        const valueWei = web3.utils.toWei(value, 'ether');
        const minInvestmentWei = web3.utils.toWei(minInvestment, 'ether');
        const durationSeconds = parseInt(duration) * 24 * 60 * 60;

        showToast('Tokenizing property... Please confirm in MetaMask', 'success');

        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        await estateContract.methods
            .tokenizeProperty(
                name,
                location,
                propertyType,
                description,
                valueWei,
                tokenSupply,
                minInvestmentWei,
                durationSeconds
            )
            .send({ from: account });

        showToast('Property tokenized successfully!', 'success');

        document.getElementById('propertyForm').reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Tokenize Property';

        await loadAllData();

    } catch (error) {
        console.error('Error tokenizing property:', error);
        showToast('Failed to tokenize property: ' + error.message, 'error');

        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Tokenize Property';
    }
}

async function investInProperty(propertyId) {
    if (!account) {
        showToast('Please connect your wallet first', 'error');
        return;
    }

    const input = document.getElementById(`invest-${propertyId}`);
    const amount = input.value;

    if (!amount || parseFloat(amount) <= 0) {
        showToast('Please enter a valid investment amount', 'error');
        return;
    }

    try {
        const amountWei = web3.utils.toWei(amount, 'ether');

        showToast('Processing investment... Please confirm in MetaMask', 'success');

        const investBtn = input.nextElementSibling;
        investBtn.disabled = true;
        investBtn.textContent = 'Processing...';

        await estateContract.methods
            .invest(propertyId)
            .send({
                from: account,
                value: amountWei
            });

        showToast('Investment successful! Reward tokens received.', 'success');

        input.value = '';
        investBtn.disabled = false;
        investBtn.textContent = 'Invest';

        await loadAllData();

    } catch (error) {
        console.error('Error investing:', error);
        showToast('Failed to invest: ' + error.message, 'error');

        const investBtn = input.nextElementSibling;
        if (investBtn) {
            investBtn.disabled = false;
            investBtn.textContent = 'Invest';
        }
    }
}

function initializeTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabName).classList.add('active');

            if (tabName === 'portfolio') {
                renderPortfolio();
            }
        });
    });
}

function showToast(message, type = 'success') {
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) reverse';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function initializeEventListeners() {
    document.getElementById('connectBtn').addEventListener('click', connectWallet);
    document.getElementById('propertyForm').addEventListener('submit', createProperty);
    initializeTabs();
}

window.addEventListener('load', () => {
    initializeEventListeners();

    if (window.ethereum && window.ethereum.selectedAddress) {
        connectWallet();
    }
});

window.investInProperty = investInProperty;
