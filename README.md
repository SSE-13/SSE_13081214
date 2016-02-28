# 自我介绍


>* **个人信息**
  * 姓名：`尹睿尧`
  * 学号：`13081214`


>* __兴趣爱好__
  * [游戏王](http://baike.baidu.com/link?url=srpaeSWafznTo3G5x1u1DyGfbM7BB7IM7jlgeBuikFMMdtRAotm1wjMQHYavx55UT0c87Nw6CSNykbzlyOJyoSVkhFCJ8F2_Fbe_ttFSAdW)
  * [游戏王](http://baike.baidu.com/link?url=srpaeSWafznTo3G5x1u1DyGfbM7BB7IM7jlgeBuikFMMdtRAotm1wjMQHYavx55UT0c87Nw6CSNykbzlyOJyoSVkhFCJ8F2_Fbe_ttFSAdW)
  * [游戏王](http://baike.baidu.com/link?url=srpaeSWafznTo3G5x1u1DyGfbM7BB7IM7jlgeBuikFMMdtRAotm1wjMQHYavx55UT0c87Nw6CSNykbzlyOJyoSVkhFCJ8F2_Fbe_ttFSAdW) *（重要的事情说三遍O(∩_∩)O）*
  
  
  
  
  
  
  ![](http://imgsrc.baidu.com/forum/pic/item/8e330bb30f2442a732602ce7d743ad4bd01302ec.jpg)


>* __代码片段__
```
package com.yugioh;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
public class MainActivity extends Activity {
    private Button button;
    private Button button01;
    boolean isIconChange1 = false;
    boolean isIconChange2 = false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button = (Button) findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(isIconChange1){
                    button.setBackgroundResource(R.drawable.mainbutton);
                    isIconChange1 = false;
                }else{
                    button.setBackgroundResource(R.drawable.mainbutton01);
                    isIconChange1 = true;
                    isIconChange2 = true;
                }
                Intent intent = new Intent(MainActivity.this, SeriesActivity.class);
                startActivity(intent);
        }
        });
        button01 = (Button) findViewById(R.id.button01);
        button01.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(isIconChange2){
                    button01.setBackgroundResource(R.drawable.mainbutton2);
                    isIconChange2 = false;
                }else{
                    button01.setBackgroundResource(R.drawable.mainbutton201);
                    isIconChange2 = true;
                    isIconChange1 = true;
                }
                Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                startActivity(intent);
            }
        });
    }
    @Override  protected void onRestart() {
        super.onRestart();
        if(isIconChange1){
            button.setBackgroundResource(R.drawable.mainbutton);
            isIconChange1 = false;
        }else{
            button.setBackgroundResource(R.drawable.mainbutton01);
            isIconChange1 = true;
        }
        if(isIconChange2){
            button01.setBackgroundResource(R.drawable.mainbutton2);
            isIconChange2 = false;
        }else{
            button01.setBackgroundResource(R.drawable.mainbutton201);
            isIconChange2 = true;
        }
    }
}
```
