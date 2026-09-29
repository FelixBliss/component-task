package com.my.componenttask;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(android.os.Bundle savedInstanceState) {
        // Register custom plugins BEFORE BridgeActivity creates the Capacitor bridge.
        registerPlugin(com.my.componenttask.UnityAdsPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
