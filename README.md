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
#include <stdio.h> 
#include<math.h>
int main(void)
{
	float benjin,lilv,benxiheji;
	int years;
	printf("请输入本金，存储年份，年利率：\n");
	while (scanf("%f %d %f", &benjin, &years, &lilv) == 3)
	{
		benxiheji = benjin * pow((1.0 + lilv), years);
		printf("%d年之后的本息合计为%f\n", years, benxiheji);
		printf("请输入本金，存储年份，年利率：（按q退出）\n");
	}
}
```
