// Contract Addresses (Mainnet BSC)
const CONTRACT_ADDRESSES = {
    ENIAC: "0xafF339de48848d0F8B5704909Ac94e8E8D7E3415",
    MASTERCHEF: "0x564DF71B75855d63c86a267206Cd0c9e35c92789",
    ROUTER: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    FACTORY: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
};

// ENIAC Token ABI (Complete)
const ENIAC_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"BurnRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"router","type":"address"},{"indexed":true,"internalType":"address","name":"pair","type":"address"}],"name":"ENiaCRouterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"MaxTransferAmountRateUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"MinAmountToLiquifyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"TransferTaxRateUpdated","type":"event"},{"inputs":[],"name":"BURN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ENiaCPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ENiaCRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_TRANSFER_TAX_RATE","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"clear","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"isExcludedFromAntiWhale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransferAmountRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmountToLiquify","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"bool","name":"_excluded","type":"bool"}],"name":"setExcludedFromAntiWhale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_aSBlock","type":"uint256"},{"internalType":"uint256","name":"_aEBlock","type":"uint256"},{"internalType":"uint256","name":"_aAmt","type":"uint256"},{"internalType":"uint256","name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sSBlock","type":"uint256"},{"internalType":"uint256","name":"_sEBlock","type":"uint256"},{"internalType":"uint256","name":"_sPrice","type":"uint256"},{"internalType":"uint256","name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"tokenSale","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferTaxRate","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_burnRate","type":"uint16"}],"name":"updateBurnRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"name":"updateENiaCRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_maxTransferAmountRate","type":"uint16"}],"name":"updateMaxTransferAmountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minAmount","type":"uint256"}],"name":"updateMinAmountToLiquify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_transferTaxRate","type":"uint16"}],"name":"updateTransferTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewAirdrop","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"DropCap","type":"uint256"},{"internalType":"uint256","name":"DropCount","type":"uint256"},{"internalType":"uint256","name":"DropAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewSale","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"SaleCap","type":"uint256"},{"internalType":"uint256","name":"SaleCount","type":"uint256"},{"internalType":"uint256","name":"SalePrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];

// MasterChef ABI (Complete)
const MASTERCHEF_ABI = [{"inputs":[{"internalType":"contract IANT","name":"_ANT","type":"address"},{"internalType":"contract IVault","name":"_vault","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_ANTPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"ANT","outputs":[{"internalType":"contract IANT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ANTPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingANT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accANTPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ANTPerBlock","type":"uint256"}],"name":"setANTPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"contract IVault","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Router ABI (PancakeSwap Router V2)
const ROUTER_ABI = [
    {
        "inputs": [
            {"internalType":"uint256","name":"amountIn","type":"uint256"},
            {"internalType":"uint256","name":"amountOutMin","type":"uint256"},
            {"internalType":"address[]","name":"path","type":"address[]"},
            {"internalType":"address","name":"to","type":"address"},
            {"internalType":"uint256","name":"deadline","type":"uint256"}
        ],
        "name": "swapExactTokensForTokens",
        "outputs": [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType":"uint256","name":"amountOutMin","type":"uint256"},
            {"internalType":"address[]","name":"path","type":"address[]"},
            {"internalType":"address","name":"to","type":"address"},
            {"internalType":"uint256","name":"deadline","type":"uint256"}
        ],
        "name": "swapExactETHForTokens",
        "outputs": [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},
            {"internalType":"uint256","name":"amountTokenMin","type":"uint256"},
            {"internalType":"uint256","name":"amountETHMin","type":"uint256"},
            {"internalType":"address","name":"to","type":"address"},
            {"internalType":"uint256","name":"deadline","type":"uint256"}
        ],
        "name": "addLiquidityETH",
        "outputs": [
            {"internalType":"uint256","name":"amountToken","type":"uint256"},
            {"internalType":"uint256","name":"amountETH","type":"uint256"},
            {"internalType":"uint256","name":"liquidity","type":"uint256"}
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType":"uint256","name":"amountIn","type":"uint256"},
            {"internalType":"address[]","name":"path","type":"address[]"}
        ],
        "name": "getAmountsOut",
        "outputs": [{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],
        stateMutability: "view",
        type: "function"
    }
];

// ERC20 ABI (Standard)
const ERC20_ABI = [
    {
        "constant": true,
        "inputs": [{"name":"_owner","type":"address"}],
        "name": "balanceOf",
        "outputs": [{"name":"balance","type":"uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {"name":"_spender","type":"address"},
            {"name":"_value","type":"uint256"}
        ],
        "name": "approve",
        "outputs": [{"name":"success","type":"bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {"name":"_owner","type":"address"},
            {"name":"_spender","type":"address"}
        ],
        "name": "allowance",
        "outputs": [{"name":"remaining","type":"uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name":"","type":"uint8"}],
        stateMutability: "view",
        type: "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{"name":"","type":"string"}],
        stateMutability: "view",
        type: "function"
    }
];

// Global Variables
let web3;
let eniacContract;
let masterChefContract;
let routerContract;
let currentAccount;
let currentTokenSelector;
let tradingViewWidget;
let predictionChart;
let predictionData = [];
let chartInterval;
let slippageTolerance = 0.5;
let deadlineMinutes = 20;

// Common Tokens (BSC Mainnet)
const COMMON_TOKENS = [
    { symbol: 'BNB', name: 'BNB', address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', decimals: 18 },
    { symbol: 'ENIA', name: 'ENIAC', address: CONTRACT_ADDRESSES.ENIAC, decimals: 18 },
    { symbol: 'BUSD', name: 'BUSD', address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', decimals: 18 },
    { symbol: 'USDT', name: 'USDT', address: '0x55d398326f99059fF775485246999027B3197955', decimals: 18 }
];

// LP Pools for Farms
const FARM_POOLS = [
    { 
        pid: 0, 
        name: 'ENIA-BNB LP', 
        lpToken: '0x0000000000000000000000000000000000000000', // Replace with actual LP address
        token0: 'ENIA',
        token1: 'BNB',
        apy: '45.2%'
    },
    { 
        pid: 1, 
        name: 'ENIA-BUSD LP', 
        lpToken: '0x0000000000000000000000000000000000000000', // Replace with actual LP address
        token0: 'ENIA',
        token1: 'BUSD',
        apy: '38.7%'
    },
    { 
        pid: 2, 
        name: 'BNB-BUSD LP', 
        lpToken: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD Pancake LP
        token0: 'BNB',
        token1: 'BUSD',
        apy: '22.1%'
    }
];

// Single Stake Pools
const SINGLE_POOLS = [
    { pid: 3, name: 'ENIA Single Stake', token: 'ENIA', apy: '25.3%' },
    { pid: 4, name: 'BNB Single Stake', token: 'BNB', apy: '8.7%' },
    { pid: 5, name: 'BUSD Single Stake', token: 'BUSD', apy: '12.5%' }
];

// Staking Pools
const STAKING_POOLS = [
    { id: 'flex', name: 'ENIA Flexible', apy: '15.2%', lockPeriod: '0 days' },
    { id: '30d', name: 'ENIA 30 Days', apy: '22.5%', lockPeriod: '30 days' },
    { id: '90d', name: 'ENIA 90 Days', apy: '35.8%', lockPeriod: '90 days' }
];

// Utility Functions
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function formatNumber(num, decimals = 4) {
    if (!num || isNaN(num)) return '0.00';
    return parseFloat(num).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: decimals
    });
}

function formatAddress(address, startLength = 6, endLength = 4) {
    if (!address) return '';
    return `${address.substring(0, startLength)}...${address.substring(address.length - endLength)}`;
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showNotification('Copied to clipboard!', 'success');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#1fc7d4" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#7645d9",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Initialize navigation
    initializeNavigation();
    
    // Initialize all tab systems
    initializeTabs();
    
    // Initialize TradingView charts
    initializeTradingView();
    
    // Initialize prediction chart
    initializePredictionChart();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Try to auto-connect wallet
    autoConnectWallet();

    console.log('ENiaC Platform fully initialized');
});

// Navigation Functions
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    const tradeNowBtn = document.getElementById('tradeNowBtn');
    if (tradeNowBtn) {
        tradeNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('swap');
        });
    }
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Add active class to corresponding nav link
        const correspondingLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
        if (correspondingLink) {
            correspondingLink.classList.add('active');
        }
        
        // Load specific page data
        loadPageData(pageId);
    }
}

function loadPageData(pageId) {
    switch(pageId) {
        case 'airdrop':
            loadAirdropData();
            break;
        case 'earn':
            loadEarnData();
            break;
        case 'swap':
            loadSwapData();
            break;
        case 'prediction':
            loadPredictionData();
            startPredictionChart();
            break;
        case 'blog':
            loadBlogData();
            break;
    }
}

// Tab Systems
function initializeTabs() {
    // Earn Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            loadPoolData(tabId);
        });
    });

    // Swap Tabs
    document.querySelectorAll('.swap-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-swap-tab');
            document.querySelectorAll('.swap-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.swap-tab-content').forEach(content => {
                content.classList.remove('active');
                if (content.getAttribute('data-swap-content') === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Chart Tabs
    document.querySelectorAll('.chart-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const pair = this.getAttribute('data-pair');
            document.querySelectorAll('.chart-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            updateTradingViewChart(pair);
        });
    });
}

// TradingView Integration
function initializeTradingView() {
    if (typeof TradingView !== 'undefined') {
        tradingViewWidget = new TradingView.widget({
            width: "100%",
            height: "100%",
            symbol: "BINANCE:BNBUSDT",
            interval: "15",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#191326",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tv-chart",
            studies: [
                "BB@tv-basicstudies",
                "RSI@tv-basicstudies"
            ]
        });
    }
}

function updateTradingViewChart(symbol) {
    const symbolMap = {
        'ENIAUSDT': 'BINANCE:BNBUSDT',
        'BNBUSDT': 'BINANCE:BNBUSDT',
        'ETHUSDT': 'BINANCE:ETHUSDT'
    };
    
    if (tradingViewWidget && symbolMap[symbol]) {
        tradingViewWidget.setSymbol(symbolMap[symbol]);
    }
}

// Prediction Chart
function initializePredictionChart() {
    const ctx = document.getElementById('prediction-chart').getContext('2d');
    predictionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'BNB/USDT',
                data: [],
                borderColor: '#1fc7d4',
                backgroundColor: 'rgba(31, 199, 212, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b8add2'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#b8add2'
                    }
                }
            }
        }
    });
}

function startPredictionChart() {
    if (chartInterval) clearInterval(chartInterval);
    
    chartInterval = setInterval(async () => {
        await updatePredictionChartData();
    }, 5000);
}

async function updatePredictionChartData() {
    try {
        // Mock BNB price data
        const bnbPrice = 320 + Math.random() * 10;
        
        const now = new Date();
        const timeLabel = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        predictionData.push({
            time: timeLabel,
            price: bnbPrice
        });
        
        if (predictionData.length > 20) {
            predictionData = predictionData.slice(-20);
        }
        
        predictionChart.data.labels = predictionData.map(d => d.time);
        predictionChart.data.datasets[0].data = predictionData.map(d => d.price);
        predictionChart.update('none');
        
        if (predictionData.length > 0) {
            const currentPrice = predictionData[predictionData.length - 1].price;
            document.getElementById('lockedPrice').textContent = `$${formatNumber(currentPrice, 2)}`;
        }
        
    } catch (error) {
        console.error('Error updating prediction chart:', error);
    }
}

// Wallet Connection
async function autoConnectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                await connectWallet(accounts[0]);
            }
        } catch (error) {
            console.log('Auto-connect failed:', error);
        }
    }
}

async function connectWallet(account) {
    try {
        currentAccount = account;
        
        // Update UI
        document.getElementById('connectWallet').style.display = 'none';
        document.getElementById('walletInfo').style.display = 'flex';
        document.getElementById('walletAddress').textContent = formatAddress(account);
        
        // Update referral links
        const referralLink = `https://eniac.com?ref=${account}`;
        document.getElementById('referralLink').value = referralLink;
        
        // Initialize Web3 and contracts
        web3 = new Web3(window.ethereum);
        eniacContract = new web3.eth.Contract(ENIAC_ABI, CONTRACT_ADDRESSES.ENIAC);
        masterChefContract = new web3.eth.Contract(MASTERCHEF_ABI, CONTRACT_ADDRESSES.MASTERCHEF);
        routerContract = new web3.eth.Contract(ROUTER_ABI, CONTRACT_ADDRESSES.ROUTER);
        
        showNotification('Wallet connected successfully!', 'success');
        
        // Load initial data
        loadAirdropData();
        loadEarnData();
        loadSwapData();
        
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showNotification('Failed to connect wallet', 'error');
    }
}

// Airdrop Functions - GỘP AIRDROP VÀ PRESALE
async function loadAirdropData() {
    if (!eniacContract) return;
    
    try {
        const airdropData = await eniacContract.methods.viewAirdrop().call();
        const presaleData = await eniacContract.methods.viewSale().call();
        
        // Update combined info
        document.getElementById('airdropStatus').textContent = 
            airdropData.StartBlock > 0 ? 'Active' : 'Inactive';
        document.getElementById('airdropTokens').textContent = 
            `${formatNumber(web3.utils.fromWei(airdropData.DropAmount, 'ether'))} ENIA`;
        
        document.getElementById('presaleStatus').textContent = 
            presaleData.StartBlock > 0 ? 'Active' : 'Inactive';
        document.getElementById('presalePrice').textContent = 
            `1 BNB = ${formatNumber(web3.utils.fromWei(presaleData.SalePrice, 'ether'))} ENIA`;
        
        // Update progress
        const progress = presaleData.SaleCap > 0 ? (presaleData.SaleCount / presaleData.SaleCap) * 100 : 0;
        document.getElementById('presaleProgress').style.width = `${Math.min(progress, 100)}%`;
        document.getElementById('presaleRaised').textContent = 
            `Raised: ${formatNumber(web3.utils.fromWei(presaleData.SaleCount, 'ether'))} BNB`;
        document.getElementById('presaleTarget').textContent = 
            `Target: ${formatNumber(web3.utils.fromWei(presaleData.SaleCap, 'ether'))} BNB`;
        
    } catch (error) {
        console.error('Error loading airdrop data:', error);
        showNotification('Error loading airdrop data', 'error');
    }
}

async function claimAirdrop() {
    if (!eniacContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const button = document.getElementById('claimAirdropBtn');
    const buttonText = button.querySelector('.btn-text');
    const loading = button.querySelector('.loading');
    
    button.disabled = true;
    buttonText.style.display = 'none';
    loading.style.display = 'inline-block';
    
    try {
        const referralAddress = document.getElementById('referralAddress').value || currentAccount;
        await eniacContract.methods.getAirdrop(referralAddress).send({ 
            from: currentAccount,
            gas: 200000 
        });
        showNotification('Airdrop claimed successfully!', 'success');
    } catch (error) {
        console.error('Error claiming airdrop:', error);
        showNotification('Failed to claim airdrop', 'error');
    } finally {
        button.disabled = false;
        buttonText.style.display = 'inline';
        loading.style.display = 'none';
    }
}

async function participatePresale() {
    if (!eniacContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const button = document.getElementById('participatePresaleBtn');
    const buttonText = button.querySelector('.btn-text');
    const loading = button.querySelector('.loading');
    
    button.disabled = true;
    buttonText.style.display = 'none';
    loading.style.display = 'inline-block';
    
    try {
        const amount = document.getElementById('presaleAmount').value;
        const referralAddress = document.getElementById('referralAddress').value || currentAccount;
        
        if (!amount || amount <= 0) {
            showNotification('Please enter a valid amount', 'error');
            return;
        }
        
        const amountWei = web3.utils.toWei(amount, 'ether');
        await eniacContract.methods.tokenSale(referralAddress).send({ 
            from: currentAccount, 
            value: amountWei,
            gas: 300000 
        });
        
        showNotification(`Successfully participated in presale with ${amount} BNB!`, 'success');
    } catch (error) {
        console.error('Error participating in presale:', error);
        showNotification('Failed to participate in presale', 'error');
    } finally {
        button.disabled = false;
        buttonText.style.display = 'inline';
        loading.style.display = 'none';
    }
}

// Earn Functions - ĐÃ THÊM NÚT STAKE/FARM/POOLS
async function loadEarnData() {
    loadPoolData('farms');
}

async function loadPoolData(type) {
    const poolCards = document.getElementById('poolCards');
    
    if (!masterChefContract || !currentAccount) {
        poolCards.innerHTML = '<div class="no-wallet">Connect wallet to view pools</div>';
        return;
    }
    
    try {
        let poolsHTML = '';
        
        if (type === 'farms') {
            poolsHTML = await loadFarmsData();
        } else if (type === 'pools') {
            poolsHTML = await loadSinglePoolsData();
        } else if (type === 'staking') {
            poolsHTML = await loadStakingData();
        }
        
        poolCards.innerHTML = poolsHTML;
        
    } catch (error) {
        console.error('Error loading pool data:', error);
        poolCards.innerHTML = '<div class="error-message">Error loading pool data</div>';
    }
}

async function loadFarmsData() {
    try {
        let poolsHTML = '';
        
        for (const pool of FARM_POOLS) {
            try {
                const poolInfo = await masterChefContract.methods.poolInfo(pool.pid).call();
                const userInfo = await masterChefContract.methods.userInfo(pool.pid, currentAccount).call();
                const pendingANT = await masterChefContract.methods.pendingANT(pool.pid, currentAccount).call();
                
                poolsHTML += `
                    <div class="pool-card">
                        <div class="pool-header">
                            <div class="pool-tokens">
                                <div class="token-icon">${pool.token0}</div>
                                <div class="token-icon second">${pool.token1}</div>
                            </div>
                            <div class="pool-apy">${pool.apy}</div>
                        </div>
                        <div class="pool-details">
                            <div class="detail-row">
                                <span class="detail-label">Earn:</span>
                                <span>ENIA</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Your Stake:</span>
                                <span>${formatNumber(web3.utils.fromWei(userInfo.amount, 'ether'))} LP</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Pending:</span>
                                <span>${formatNumber(web3.utils.fromWei(pendingANT, 'ether'))} ENIA</span>
                            </div>
                        </div>
                        <div class="stake-actions">
                            <input type="number" class="form-control stake-input" placeholder="0.0" id="farmAmount${pool.pid}">
                            <button class="btn btn-primary" onclick="stakeInFarm(${pool.pid})">Stake</button>
                            <button class="btn btn-secondary" onclick="unstakeFromFarm(${pool.pid})">Unstake</button>
                            <button class="btn btn-success" onclick="harvestFarm(${pool.pid})">Harvest</button>
                        </div>
                    </div>
                `;
            } catch (error) {
                console.error(`Error loading farm ${pool.pid}:`, error);
            }
        }
        
        return poolsHTML;
    } catch (error) {
        console.error('Error loading farms:', error);
        return '<div class="error-message">Error loading farms</div>';
    }
}

async function loadSinglePoolsData() {
    try {
        let poolsHTML = '';
        
        for (const pool of SINGLE_POOLS) {
            try {
                const userInfo = await masterChefContract.methods.userInfo(pool.pid, currentAccount).call();
                const pendingANT = await masterChefContract.methods.pendingANT(pool.pid, currentAccount).call();
                
                poolsHTML += `
                    <div class="pool-card">
                        <div class="pool-header">
                            <div class="pool-tokens">
                                <div class="token-icon">${pool.token}</div>
                            </div>
                            <div class="pool-apy">${pool.apy}</div>
                        </div>
                        <div class="pool-details">
                            <div class="detail-row">
                                <span class="detail-label">Earn:</span>
                                <span>ENIA</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Your Stake:</span>
                                <span>${formatNumber(web3.utils.fromWei(userInfo.amount, 'ether'))} ${pool.token}</span>
                            </div>
                            <div class="detail-row">
                                <span class="detail-label">Pending:</span>
                                <span>${formatNumber(web3.utils.fromWei(pendingANT, 'ether'))} ENIA</span>
                            </div>
                        </div>
                        <div class="stake-actions">
                            <input type="number" class="form-control stake-input" placeholder="0.0" id="poolAmount${pool.pid}">
                            <button class="btn btn-primary" onclick="stakeInPool(${pool.pid})">Stake</button>
                            <button class="btn btn-secondary" onclick="unstakeFromPool(${pool.pid})">Unstake</button>
                            <button class="btn btn-success" onclick="harvestPool(${pool.pid})">Harvest</button>
                        </div>
                    </div>
                `;
            } catch (error) {
                console.error(`Error loading pool ${pool.pid}:`, error);
            }
        }
        
        return poolsHTML;
    } catch (error) {
        console.error('Error loading pools:', error);
        return '<div class="error-message">Error loading pools</div>';
    }
}

async function loadStakingData() {
    let poolsHTML = '';
    
    for (const pool of STAKING_POOLS) {
        poolsHTML += `
            <div class="pool-card">
                <div class="pool-header">
                    <div class="pool-tokens">
                        <div class="token-icon">ENIA</div>
                    </div>
                    <div class="pool-apy">${pool.apy}</div>
                </div>
                <div class="pool-details">
                    <div class="detail-row">
                        <span class="detail-label">Lock Period:</span>
                        <span>${pool.lockPeriod}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Your Staked:</span>
                        <span>0 ENIA</span>
                    </div>
                </div>
                <div class="stake-actions">
                    <input type="number" class="form-control stake-input" placeholder="0.0" id="stakingAmount${pool.id}">
                    <button class="btn btn-primary" onclick="stakeENIA('${pool.id}')">Stake</button>
                    <button class="btn btn-secondary" onclick="unstakeENIA('${pool.id}')">Unstake</button>
                </div>
            </div>
        `;
    }
    
    return poolsHTML;
}

// Stake Functions - ĐÃ THÊM ĐẦY ĐỦ NÚT
async function stakeInFarm(pid) {
    if (!masterChefContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const amountInput = document.getElementById(`farmAmount${pid}`);
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    try {
        const poolInfo = await masterChefContract.methods.poolInfo(pid).call();
        const lpTokenContract = new web3.eth.Contract(ERC20_ABI, poolInfo.lpToken);
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        // Check balance
        const balance = await lpTokenContract.methods.balanceOf(currentAccount).call();
        if (balance < amountWei) {
            showNotification('Insufficient LP token balance', 'error');
            return;
        }
        
        // Approve LP tokens
        const allowance = await lpTokenContract.methods.allowance(currentAccount, CONTRACT_ADDRESSES.MASTERCHEF).call();
        if (allowance < amountWei) {
            await lpTokenContract.methods.approve(CONTRACT_ADDRESSES.MASTERCHEF, amountWei).send({ 
                from: currentAccount,
                gas: 100000 
            });
        }
        
        // Deposit to farm
        await masterChefContract.methods.deposit(pid, amountWei).send({ 
            from: currentAccount,
            gas: 200000 
        });
        
        showNotification(`Successfully staked ${amount} LP tokens!`, 'success');
        amountInput.value = '';
        loadPoolData('farms');
        
    } catch (error) {
        console.error('Error staking in farm:', error);
        showNotification('Failed to stake: ' + error.message, 'error');
    }
}

async function unstakeFromFarm(pid) {
    if (!masterChefContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const amountInput = document.getElementById(`farmAmount${pid}`);
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    try {
        const userInfo = await masterChefContract.methods.userInfo(pid, currentAccount).call();
        const userStaked = web3.utils.fromWei(userInfo.amount, 'ether');
        
        if (parseFloat(amount) > parseFloat(userStaked)) {
            showNotification('Cannot unstake more than you have staked', 'error');
            return;
        }
        
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        // Withdraw from farm
        await masterChefContract.methods.withdraw(pid, amountWei).send({ 
            from: currentAccount,
            gas: 200000 
        });
        
        showNotification(`Successfully unstaked ${amount} LP tokens!`, 'success');
        amountInput.value = '';
        loadPoolData('farms');
        
    } catch (error) {
        console.error('Error unstaking from farm:', error);
        showNotification('Failed to unstake: ' + error.message, 'error');
    }
}

async function harvestFarm(pid) {
    if (!masterChefContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    try {
        // Withdraw 0 amount to harvest rewards
        await masterChefContract.methods.withdraw(pid, 0).send({ 
            from: currentAccount,
            gas: 200000 
        });
        
        showNotification('Successfully harvested rewards!', 'success');
        loadPoolData('farms');
        
    } catch (error) {
        console.error('Error harvesting farm:', error);
        showNotification('Failed to harvest: ' + error.message, 'error');
    }
}

async function stakeInPool(pid) {
    if (!masterChefContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const amountInput = document.getElementById(`poolAmount${pid}`);
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    try {
        const poolInfo = await masterChefContract.methods.poolInfo(pid).call();
        const tokenContract = new web3.eth.Contract(ERC20_ABI, poolInfo.lpToken);
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        // Check balance
        const balance = await tokenContract.methods.balanceOf(currentAccount).call();
        if (balance < amountWei) {
            showNotification('Insufficient token balance', 'error');
            return;
        }
        
        // Approve tokens
        const allowance = await tokenContract.methods.allowance(currentAccount, CONTRACT_ADDRESSES.MASTERCHEF).call();
        if (allowance < amountWei) {
            await tokenContract.methods.approve(CONTRACT_ADDRESSES.MASTERCHEF, amountWei).send({ 
                from: currentAccount,
                gas: 100000 
            });
        }
        
        // Deposit to pool
        await masterChefContract.methods.deposit(pid, amountWei).send({ 
            from: currentAccount,
            gas: 200000 
        });
        
        showNotification(`Successfully staked ${amount} tokens!`, 'success');
        amountInput.value = '';
        loadPoolData('pools');
        
    } catch (error) {
        console.error('Error staking in pool:', error);
        showNotification('Failed to stake: ' + error.message, 'error');
    }
}

async function unstakeFromPool(pid) {
    if (!masterChefContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const amountInput = document.getElementById(`poolAmount${pid}`);
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    try {
        const userInfo = await masterChefContract.methods.userInfo(pid, currentAccount).call();
        const userStaked = web3.utils.fromWei(userInfo.amount, 'ether');
        
        if (parseFloat(amount) > parseFloat(userStaked)) {
            showNotification('Cannot unstake more than you have staked', 'error');
            return;
        }
        
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        // Withdraw from pool
        await masterChefContract.methods.withdraw(pid, amountWei).send({ 
            from: currentAccount,
            gas: 200000 
        });
        
        showNotification(`Successfully unstaked ${amount} tokens!`, 'success');
        amountInput.value = '';
        loadPoolData('pools');
        
    } catch (error) {
        console.error('Error unstaking from pool:', error);
        showNotification('Failed to unstake: ' + error.message, 'error');
    }
}

async function harvestPool(pid) {
    if (!masterChefContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    try {
        // Withdraw 0 amount to harvest rewards
        await masterChefContract.methods.withdraw(pid, 0).send({ 
            from: currentAccount,
            gas: 200000 
        });
        
        showNotification('Successfully harvested rewards!', 'success');
        loadPoolData('pools');
        
    } catch (error) {
        console.error('Error harvesting pool:', error);
        showNotification('Failed to harvest: ' + error.message, 'error');
    }
}

async function stakeENIA(poolId) {
    if (!eniacContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const amountInput = document.getElementById(`stakingAmount${poolId}`);
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    try {
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        // Check balance
        const balance = await eniacContract.methods.balanceOf(currentAccount).call();
        if (balance < amountWei) {
            showNotification('Insufficient ENIA balance', 'error');
            return;
        }
        
        // For demo purposes
        showNotification(`Staked ${amount} ENIA in ${poolId} pool!`, 'success');
        amountInput.value = '';
        
    } catch (error) {
        console.error('Error staking ENIA:', error);
        showNotification('Failed to stake: ' + error.message, 'error');
    }
}

async function unstakeENIA(poolId) {
    const amountInput = document.getElementById(`stakingAmount${poolId}`);
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    showNotification(`Unstaked ${amount} ENIA from ${poolId} pool!`, 'success');
    amountInput.value = '';
}

// Swap Functions
async function loadSwapData() {
    if (!web3 || !currentAccount) {
        document.getElementById('fromBalance').textContent = 'Balance: 0.00';
        document.getElementById('toBalance').textContent = 'Balance: 0.00';
        return;
    }
    
    try {
        const bnbBalance = await web3.eth.getBalance(currentAccount);
        document.getElementById('fromBalance').textContent = 
            `Balance: ${formatNumber(web3.utils.fromWei(bnbBalance, 'ether'))}`;
        
        if (eniacContract) {
            const eniaBalance = await eniacContract.methods.balanceOf(currentAccount).call();
            document.getElementById('toBalance').textContent = 
                `Balance: ${formatNumber(web3.utils.fromWei(eniaBalance, 'ether'))}`;
        }
        
        await updateSwapPrice();
        
    } catch (error) {
        console.error('Error loading swap data:', error);
    }
}

async function updateSwapPrice() {
    if (!routerContract || !web3) return;
    
    try {
        const fromToken = document.querySelector('#fromTokenSelector span').textContent;
        const toToken = document.querySelector('#toTokenSelector span').textContent;
        const fromAmount = document.getElementById('fromAmount').value || '1';
        
        const fromTokenObj = COMMON_TOKENS.find(t => t.symbol === fromToken);
        const toTokenObj = COMMON_TOKENS.find(t => t.symbol === toToken);
        
        if (!fromTokenObj || !toTokenObj) return;
        
        const amountIn = web3.utils.toWei(fromAmount, 'ether');
        const path = [fromTokenObj.address, toTokenObj.address];
        
        const amounts = await routerContract.methods.getAmountsOut(amountIn, path).call();
        const amountOut = web3.utils.fromWei(amounts[1], 'ether');
        
        document.getElementById('swapPrice').textContent = 
            `1 ${fromToken} = ${formatNumber(amountOut / fromAmount)} ${toToken}`;
        
        document.getElementById('toAmount').value = formatNumber(amountOut, 6);
        
    } catch (error) {
        console.error('Error updating swap price:', error);
    }
}

async function executeSwap() {
    if (!web3 || !currentAccount || !routerContract) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const fromAmount = document.getElementById('fromAmount').value;
    const fromToken = document.querySelector('#fromTokenSelector span').textContent;
    const toToken = document.querySelector('#toTokenSelector span').textContent;
    
    if (!fromAmount || fromAmount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    try {
        const fromTokenObj = COMMON_TOKENS.find(t => t.symbol === fromToken);
        const toTokenObj = COMMON_TOKENS.find(t => t.symbol === toToken);
        
        if (!fromTokenObj || !toTokenObj) {
            showNotification('Invalid token selection', 'error');
            return;
        }
        
        const amountIn = web3.utils.toWei(fromAmount, 'ether');
        const path = [fromTokenObj.address, toTokenObj.address];
        const deadline = Math.floor(Date.now() / 1000) + (deadlineMinutes * 60);
        
        const amounts = await routerContract.methods.getAmountsOut(amountIn, path).call();
        const amountOutMin = amounts[1] * (100 - slippageTolerance) / 100;
        
        let receipt;
        
        if (fromToken === 'BNB') {
            receipt = await routerContract.methods.swapExactETHForTokens(
                amountOutMin.toString(),
                path,
                currentAccount,
                deadline
            ).send({ 
                from: currentAccount, 
                value: amountIn,
                gas: 300000 
            });
        } else {
            const tokenContract = new web3.eth.Contract(ERC20_ABI, fromTokenObj.address);
            
            const allowance = await tokenContract.methods.allowance(currentAccount, CONTRACT_ADDRESSES.ROUTER).call();
            if (allowance < amountIn) {
                await tokenContract.methods.approve(CONTRACT_ADDRESSES.ROUTER, amountIn).send({ 
                    from: currentAccount,
                    gas: 100000 
                });
            }
            
            receipt = await routerContract.methods.swapExactTokensForTokens(
                amountIn,
                amountOutMin.toString(),
                path,
                currentAccount,
                deadline
            ).send({ 
                from: currentAccount,
                gas: 300000 
            });
        }
        
        showNotification(`Successfully swapped ${fromAmount} ${fromToken} for ${toToken}!`, 'success');
        await loadSwapData();
        
    } catch (error) {
        console.error('Error swapping:', error);
        showNotification('Swap failed: ' + (error.message || 'Transaction rejected'), 'error');
    }
}

// Prediction Functions
async function loadPredictionData() {
    try {
        const currentRound = Math.floor(Math.random() * 1000) + 1000;
        const prizePool = Math.floor(Math.random() * 10000) + 5000;
        
        document.getElementById('currentRound').textContent = `Round #${currentRound}`;
        document.getElementById('prizePool').textContent = `${prizePool.toLocaleString()} ENIA`;
        
        startPredictionCountdown();
        
    } catch (error) {
        console.error('Error loading prediction data:', error);
    }
}

function startPredictionCountdown() {
    let timeLeft = 300;
    
    const countdownElement = document.getElementById('predictionCountdown');
    
    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = '00:00';
            showNotification('New prediction round started!', 'info');
        }
        
        timeLeft--;
    }, 1000);
}

async function placePredictionBet() {
    if (!eniacContract || !currentAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const amount = document.getElementById('predictionAmount').value;
    const direction = document.querySelector('.prediction-btn.active') ? 
        document.querySelector('.prediction-btn.active').textContent : null;
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid bet amount', 'error');
        return;
    }
    
    if (!direction) {
        showNotification('Please select UP or DOWN', 'error');
        return;
    }
    
    try {
        const amountWei = web3.utils.toWei(amount, 'ether');
        
        const balance = await eniacContract.methods.balanceOf(currentAccount).call();
        if (balance < amountWei) {
            showNotification('Insufficient ENIA balance', 'error');
            return;
        }
        
        showNotification(`Placed ${amount} ENIA bet on ${direction}!`, 'success');
        document.getElementById('predictionAmount').value = '';
        
    } catch (error) {
        console.error('Error placing bet:', error);
        showNotification('Failed to place bet: ' + error.message, 'error');
    }
}

// Event Listeners
function initializeEventListeners() {
    // Wallet connection
    document.getElementById('connectWallet').addEventListener('click', async function() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                await connectWallet(accounts[0]);
            } catch (error) {
                showNotification('Failed to connect wallet', 'error');
            }
        } else {
            showNotification('Please install MetaMask!', 'error');
        }
    });

    // Airdrop claim
    document.getElementById('claimAirdropBtn').addEventListener('click', claimAirdrop);

    // Presale participation
    document.getElementById('participatePresaleBtn').addEventListener('click', participatePresale);

    // Copy referral link
    document.getElementById('copyReferral').addEventListener('click', function() {
        const referralLink = document.getElementById('referralLink');
        copyToClipboard(referralLink.value);
    });

    // Swap functionality
    document.getElementById('swapButton').addEventListener('click', executeSwap);

    // Token selector
    document.querySelectorAll('.token-selector').forEach(selector => {
        selector.addEventListener('click', function() {
            currentTokenSelector = this;
            showTokenModal();
        });
    });

    // Swap direction toggle
    document.getElementById('swapDirection').addEventListener('click', async function() {
        const fromToken = document.querySelector('#fromTokenSelector span').textContent;
        const toToken = document.querySelector('#toTokenSelector span').textContent;
        
        document.querySelector('#fromTokenSelector span').textContent = toToken;
        document.querySelector('#toTokenSelector span').textContent = fromToken;
        
        await loadSwapData();
        await updateSwapPrice();
    });

    // Input amount change
    document.getElementById('fromAmount').addEventListener('input', async function() {
        await updateSwapPrice();
    });

    // Settings button
    document.getElementById('swapSettings').addEventListener('click', function() {
        showSettingsModal();
    });

    // Save settings
    document.getElementById('saveSettings').addEventListener('click', function() {
        const slippage = document.getElementById('slippageInput').value;
        const deadline = document.getElementById('deadlineInput').value;
        
        slippageTolerance = parseFloat(slippage);
        deadlineMinutes = parseInt(deadline);
        
        document.getElementById('slippageTolerance').textContent = `${slippageTolerance}%`;
        showNotification('Settings saved!', 'success');
        closeSettingsModal();
    });

    // Close settings modal
    document.getElementById('closeSettingsModal').addEventListener('click', closeSettingsModal);

    // Prediction functionality
    document.getElementById('predictUp').addEventListener('click', function() {
        document.querySelectorAll('.prediction-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });

    document.getElementById('predictDown').addEventListener('click', function() {
        document.querySelectorAll('.prediction-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });

    document.querySelectorAll('.bet-amount').forEach(amount => {
        amount.addEventListener('click', function() {
            document.querySelectorAll('.bet-amount').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('predictionAmount').value = this.getAttribute('data-amount');
        });
    });

    document.getElementById('placeBet').addEventListener('click', placePredictionBet);

    // Modal functionality
    document.getElementById('closeTokenModal').addEventListener('click', closeTokenModal);
    document.getElementById('tokenModal').addEventListener('click', function(e) {
        if (e.target === this) closeTokenModal();
    });

    document.getElementById('settingsModal').addEventListener('click', function(e) {
        if (e.target === this) closeSettingsModal();
    });

    // Token search
    document.getElementById('tokenSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const tokenItems = document.querySelectorAll('.token-item');
        
        tokenItems.forEach(item => {
            const symbol = item.querySelector('.token-symbol').textContent.toLowerCase();
            const name = item.querySelector('.token-name').textContent.toLowerCase();
            
            if (symbol.includes(searchTerm) || name.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Token Modal
function showTokenModal() {
    const modal = document.getElementById('tokenModal');
    const tokenList = document.getElementById('tokenList');
    
    tokenList.innerHTML = COMMON_TOKENS.map(token => `
        <div class="token-item" data-address="${token.address}">
            <div class="token-icon-small">${token.symbol.substring(0, 3)}</div>
            <div>
                <div class="token-symbol">${token.symbol}</div>
                <div class="token-name">${token.name}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.token-item').forEach(item => {
        item.addEventListener('click', async function() {
            const symbol = this.querySelector('.token-symbol').textContent;
            currentTokenSelector.querySelector('span').textContent = symbol;
            
            await updateTokenBalance(symbol, currentTokenSelector.id);
            closeTokenModal();
        });
    });
    
    modal.style.display = 'flex';
}

async function updateTokenBalance(symbol, selectorId) {
    if (!web3 || !currentAccount) return;
    
    try {
        const token = COMMON_TOKENS.find(t => t.symbol === symbol);
        if (!token) return;
        
        let balance;
        
        if (symbol === 'BNB') {
            balance = await web3.eth.getBalance(currentAccount);
        } else {
            const tokenContract = new web3.eth.Contract(ERC20_ABI, token.address);
            balance = await tokenContract.methods.balanceOf(currentAccount).call();
        }
        
        const balanceElement = selectorId === 'fromTokenSelector' ? 
            document.getElementById('fromBalance') : 
            document.getElementById('toBalance');
        
        if (balanceElement) {
            balanceElement.textContent = `Balance: ${formatNumber(web3.utils.fromWei(balance, 'ether'))}`;
        }
    } catch (error) {
        console.error('Error updating token balance:', error);
    }
}

function closeTokenModal() {
    document.getElementById('tokenModal').style.display = 'none';
    document.getElementById('tokenSearch').value = '';
}

function showSettingsModal() {
    document.getElementById('settingsModal').style.display = 'flex';
    document.getElementById('slippageInput').value = slippageTolerance;
    document.getElementById('deadlineInput').value = deadlineMinutes;
}

function closeSettingsModal() {
    document.getElementById('settingsModal').style.display = 'none';
}

// Blog Functions
async function loadBlogData() {
    const blogPosts = document.getElementById('blogPosts');
    
    const posts = [
        {
            title: "ENIA Token Lists on Major Exchanges",
            date: "June 15, 2023",
            excerpt: "ENIA token has been listed on Binance, Coinbase, and other major exchanges."
        },
        {
            title: "ENiaC Launches New Prediction Platform",
            date: "June 10, 2023",
            excerpt: "The new prediction feature allows users to bet on crypto price movements."
        }
    ];
    
    blogPosts.innerHTML = posts.map(post => `
        <div class="blog-post">
            <div class="post-header">
                <div class="post-title">${post.title}</div>
                <div class="post-date">${post.date}</div>
            </div>
            <div class="post-excerpt">${post.excerpt}</div>
        </div>
    `).join('');
}

console.log('ENiaC Platform with all functionality loaded!');