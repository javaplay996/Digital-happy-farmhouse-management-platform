const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"活动类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"美食类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryMeishi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"客房类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryMinsu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"活动管理",
                        "menuJump":"列表",
                        "tableName":"huodong"
                    }
                ],
                "menu":"活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核",
                            "删除"
                        ],
                        "menu":"活动报名管理",
                        "menuJump":"列表",
                        "tableName":"huodongYuyue"
                    }
                ],
                "menu":"活动报名管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"美食管理",
                        "menuJump":"列表",
                        "tableName":"meishi"
                    }
                ],
                "menu":"美食管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"客房管理",
                        "menuJump":"列表",
                        "tableName":"minsu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"客房评价管理",
                        "menuJump":"列表",
                        "tableName":"minsuCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"客房收藏管理",
                        "menuJump":"列表",
                        "tableName":"minsuCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "报表",
                            "删除"
                        ],
                        "menu":"客房预定管理",
                        "menuJump":"列表",
                        "tableName":"minsuOrder"
                    }
                ],
                "menu":"客房管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
]
    }
}
export default menu;
