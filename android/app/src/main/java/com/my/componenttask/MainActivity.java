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

        // Android back is coordinated with the React SPA. React decides whether
        // there is an in-app screen to return to; only the Home screen exits.
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                WebView webView = getBridge() != null ? getBridge().getWebView() : null;

                if (webView == null) {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                    return;
                }

                webView.evaluateJavascript(
                        "(function(){try{return !!(window.__NCT_HANDLE_BACK__ && window.__NCT_HANDLE_BACK__());}catch(e){return false;}})();",
                        handled -> {
                            if (!"true".equals(handled)) {
                                setEnabled(false);
                                getOnBackPressedDispatcher().onBackPressed();
                            }
                        }
                );
            }
        });
    }
}
