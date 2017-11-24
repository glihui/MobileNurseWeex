package com.weex.sample.extend.module;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.weex.sample.utlis.CacheActivity;
import com.weex.sample.utlis.LogUtil;

/**
 * 关闭应用程序
 */

public class CloseModule extends WXModule {

    @JSMethod(uiThread = false)
    public void closeApp() {
        LogUtil.e("触发关闭效果");
        CacheActivity.finishActivity();
    }
}
