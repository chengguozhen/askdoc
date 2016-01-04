$('.ui-area-selecter-parent li').on('click', function() {
	var citylist,selecterhtml;
	$(this).addClass('active').siblings().removeClass('active');
	//清空城市列表
	selecterhtml='';
	//更新对应省城市列表
	//需要获取城市列表
	citylist=['福州','泉州','三明'];
	//
	for (var i = 0; i < citylist.length; i++) {
		selecterhtml+='<li>'+citylist[i]+'</li>';
	}
	$('.ui-area-selecter-children').html(selecterhtml);
});
$('.ui-area-selecter-title').on('click', function() {
	$('.ui-area-selecter').addClass('ui-area-selecter-open');
	
});