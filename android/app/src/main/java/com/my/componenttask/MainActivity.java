package com.my.componenttask;

import android.os.Bundle;
import android.webkit.WebView;

import androidx.activity.OnBackPressedCallback;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Register custom plugins BEFORE BridgeActivity creates the Capacitor bridge.
        registerPlugin(com.my.componenttask.UnityAdsPlugin.class);
        super.onCreate(savedInstanceState);

        // Android system back:
        // 1. Navigate back through the WebView/SPA history when available.
        // 2. If there is no history, allow Android to exit the Activity instead
        //    of leaving/minimizing the app.
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                WebView webView = getBridge() != null ? getBridge().getWebView() : null;

                if (webView != null && webView.canGoBack()) {
                    webView.goBack();
                } else {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                }
            }
        });
    }
}
