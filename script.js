
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

// User balance
let balance = 0;
let miningActive = false;

// Mining button
const miningButton = document.getElementById("startMining");
const miningStatus = document.getElementById("mining-status");
const balanceDisplay = document.getElementById("balance");

miningButton.addEventListener("click", () => {
    if (miningActive) {
        miningStatus.textContent = "Mining is already active";
        return;
    }

    miningActive = true;
    miningStatus.textContent = "⛏️ Mining Active";

    miningButton.textContent = "MINING ACTIVE";
    miningButton.disabled = true;

    setInterval(() => {
        balance += 1;
        balanceDisplay.textContent =
            balance.toFixed(2) + " SADT";
    }, 3600000);
});

// TON Connect Wallet
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: window.location.origin + "/tonconnect-manifest.json"
});

document.getElementById("connectWallet")
.addEventListener("click", async () => {
    try {
        const wallet = await tonConnectUI.connectWallet();

        document.getElementById("walletAddress").textContent =
            "Connected: " + wallet.account.address;

    } catch (error) {
        alert("Wallet connection failed. Please try again.");
    }
});

// Deposit button
document.getElementById("depositButton")
.addEventListener("click", () => {
    alert(
        "Deposit: 5 TON\n" +
        "Please connect your wallet first."
    );
});
