package com.weex.sample.activity;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.weex.sample.R;
import com.weex.sample.utlis.LogUtil;

import java.util.HashMap;
import java.util.Map;

public class NetworkActivity extends AppCompatActivity implements IWXRenderListener {

    private WXSDKInstance mWXSDKInstance;
    private FrameLayout mContainer;

    private Context context;

    private static final String ACTION_BARCODE_RESULT = "";
    private static final String ACTION_BARCODE_DATA_STRING = "";

    // 这里就是需要引用的weex页面
    private final String RenderPageUrl = "http://192.168.1.200:8080/dist/sign.weex.js";

    /**
     * 扫码BroadcastReceiver
     */
    private BroadcastReceiver scanDataBroadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            if (action.equals(ACTION_BARCODE_RESULT)) {
                String str = intent.getStringExtra(ACTION_BARCODE_DATA_STRING);
                Map<String, Object> params = new HashMap<>();
                params.put("ScanResult", str);
                if (mWXSDKInstance != null) {
                    mWXSDKInstance.fireGlobalEventCallback("broadcast", params);
                }
                LogUtil.e(str);
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_network);
        context = this;

        mContainer = (FrameLayout) findViewById(R.id.container);
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);

        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, RenderPageUrl);
        mWXSDKInstance.renderByUrl("WXSample", RenderPageUrl, options, null, WXRenderStrategy.APPEND_ASYNC);

        // CacheActivity.addActivity(NetworkActivity.this);
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStart();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();

            new Handler().postDelayed(new Runnable(){
                public void run() {
                    Map<String, Object> params = new HashMap<>();
                    mWXSDKInstance.fireGlobalEventCallback("onResume", params);
                }
            }, 500);
        }
        IntentFilter scanDataIntentFilter = new IntentFilter();
        scanDataIntentFilter.addAction(ACTION_BARCODE_RESULT);
        registerReceiver(scanDataBroadcastReceiver, scanDataIntentFilter);//注册广播
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
        unregisterReceiver(scanDataBroadcastReceiver);//注销扫码广播
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
//        Map<String,Object> params=new HashMap<>();
//        params.put("name","returnmsg");
//        mWXSDKInstance.fireGlobalEventCallback("androidback",params);
    }


    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (view.getParent() != null) {
            ((ViewGroup) view.getParent()).removeView(view);
        }
        mContainer.addView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }
}
