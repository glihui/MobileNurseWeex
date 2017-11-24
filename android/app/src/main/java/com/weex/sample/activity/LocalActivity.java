package com.weex.sample.activity;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;
import com.weex.sample.R;
import com.weex.sample.utlis.LogUtil;

import java.util.HashMap;
import java.util.Map;

public class LocalActivity extends AppCompatActivity implements IWXRenderListener {

    private Context context;
    WXSDKInstance mWXSDKInstance;

    private static final String ACTION_BARCODE_RESULT = "";
    private static final String ACTION_BARCODE_DATA_STRING = "";

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
                mWXSDKInstance.fireGlobalEventCallback("geolocation", params);
                LogUtil.e(str);
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_local);
        context = this;
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
        /**
         * WXSample 可以替换成自定义的字符串，针对埋点有效。
         * template 是.we transform 后的 js文件。
         * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
         * jsonInitData 可以为空。
         */
        mWXSDKInstance.render("WXSample", WXFileUtils.loadAsset("Sign.weex.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);

        // mWXSDKInstance.render("WXSample", WXFileUtils.loadFileContent("hello.js", this), null, null, -1, -1, WXRenderStrategy.APPEND_ASYNC);
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        setContentView(view);
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


    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
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
}
