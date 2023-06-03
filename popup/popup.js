let toggleSwitch = document.getElementById("toggle-switch");

// Check if the extension is currently on or off
chrome.storage.local.get('extensionState', function(data) {
	if (data.extensionState === undefined) {
		// If the extension state hasn't been set yet, default to "on"
		chrome.storage.local.set({ extensionState: true });
		toggleSwitch.checked = true;
	} else {
		// Otherwise, set the switch to match the stored extension state
		toggleSwitch.checked = data.extensionState;
	}
});

// Listen for changes to the switch and store the new extension state in localStorage
toggleSwitch.addEventListener('change', function() {
	chrome.storage.local.set({ extensionState: toggleSwitch.checked });
});


