var adsMantle = '';
var adsSuper1 = '';
var adsSuper2 = '';
var ads1Lrec = '';
var ads2Lrec = '';
var ads3Lrec = '';
var adsCombo = '';
var adsCombo1 = '';
var adsCombo2 = '';
var adsFloat = '';
var adsFloatCrazy = '';
var focus_banner_ab = '';
var focus_banner_cd = '';
var focus_banner_c = '';
var no_focus_banner_cd = '';
var focus_banner_c_on = true;


if(typeof ONCC == 'undefined'){ONCC = {};}

document.write('<script src="http://ad2.on.cc/html/AC_RunActiveContent.js"></script>');

ONCC.OpenXMobileAdZone = {
	'hk':{
		'content_bottombanner' : ( ONCC.platform.iOS ?'1327':'1081'),
		'content_transitionpage' : '1084'
	},
	'tw':{
		'content_bottombanner' : ( ONCC.platform.iOS ?'1085':'1082'),
		'content_transitionpage' : '1804'
	},
	'cn':{
		'content_bottombanner' : ( ONCC.platform.iOS ?'1086':'1083'),
		'content_transitionpage' : '1805'
	}
		
}

ONCC.OpenXAdZone = {
	'hk':{
	
		'other' : {
		
			'other' : {
	
				'other_crazy' : '', 
				'other_float' : '300', 
				'other_lrec1' : '260', 
				'other_lrec1_abc' : '', 
				'other_lrec2' : '262', 
				'other_lrec2_abc' : '', 
				'other_lrec2_xyz' : '', 
				'other_lrec3' : '283', 
				'other_masterhead' : '334', 
				'other_super1' : '253', 
				'other_super2' : ''


			}
		},
		
		'hk':{
			'news':{
				'content_crazy' : '', 
				'content_float' : '300', 
				'content_lrec1' : '260', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '262', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '283', 
				'content_masterhead' : '334', 
				'content_super1' : '253', 
				'content_super2' : '', 
				'main_onccfunction1' : '872',
				'main_crazy' : '244', 
				'main_float' : '238', 
				'main_lrec1' : '134', 
				'main_lrec1_abc' : '208', 
				'main_lrec2' : '214', 
				'main_lrec2_abc' : '215', 
				'main_lrec2_xyz' : '216', 
				'main_lrec3' : '232', 
				'main_masterhead' : '272', 
				'main_super1' : '288', 
				'main_super2' : '294',
				'main_focus_a' : '435',
                'main_focus_b' : '436',
                'main_focus_c' : '437',
                'main_focus_c_2' : '444',
				'main_focus_c_3' : '844',
                'main_focus_d' : '438',
                'main_focus_e' : '439',
                'main_focus_f' : '440',
                'control_focus_ab' : '441',
                'control_focus_cd' : '442',
                'control_focus_ef' : '443',
				'main_lrec_notice' : '811'

				
			},
			'commentary':{
				'content_crazy' : '', 
				'content_float' : '310', 
				'content_lrec1' : '263', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '269', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '286', 
				'content_masterhead' : '336', 
				'content_super1' : '255', 
				'content_super2' : '', 
				'main_crazy' : '245', 
				'main_float' : '239', 
				'main_lrec1' : '203', 
				'main_lrec1_abc' : '209', 
				'main_lrec2' : '217', 
				'main_lrec2_abc' : '218', 
				'main_lrec2_xyz' : '219', 
				'main_lrec3' : '233', 
				'main_masterhead' : '274', 
				'main_super1' : '289', 
				'main_super2' : '295'
			},
			'finance':{
				 'content_crazy' : '', 
				'content_float' : '312', 
				'content_lrec1' : '265', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '271', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '296', 
				'content_masterhead' : '337', 
				'content_super1' : '256', 
				'content_super2' : '', 
				'main_crazy' : '246', 
				'main_float' : '240', 
				'main_lrec1' : '204', 
				'main_lrec1_abc' : '210', 
				'main_lrec2' : '220', 
				'main_lrec2_abc' : '221', 
				'main_lrec2_xyz' : '222', 
				'main_lrec3' : '234', 
				'main_masterhead' : '275', 
				'main_super1' : '290', 
				'main_super2' : '297'
			},
			'entertainment':{
				'content_crazy' : '', 
				'content_float' : '320', 
				'content_lrec1' : '267', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '281', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '298', 
				'content_masterhead' : '338', 
				'content_super1' : '257', 
				'content_super2' : '', 
				'main_crazy' : '247', 
				'main_float' : '241', 
				'main_lrec1' : '205', 
				'main_lrec1_abc' : '211', 
				'main_lrec2' : '223', 
				'main_lrec2_abc' : '224', 
				'main_lrec2_xyz' : '225', 
				'main_lrec3' : '235', 
				'main_masterhead' : '277', 
				'main_super1' : '291', 
				'main_super2' : '301'
			},
			'sport':{
				'content_crazy' : '', 
				'content_float' : '323', 
				'content_lrec1' : '270', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '276', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '299', 
				'content_masterhead' : '346', 
				'content_super1' : '258', 
				'content_super2' : '', 
				'main_crazy' : '248', 
				'main_float' : '242', 
				'main_lrec1' : '206', 
				'main_lrec1_abc' : '212', 
				'main_lrec2' : '226', 
				'main_lrec2_abc' : '227', 
				'main_lrec2_xyz' : '228', 
				'main_lrec3' : '236', 
				'main_masterhead' : '278', 
				'main_super1' : '292', 
				'main_super2' : '303'
			},
			'lifestyle':{
				'content_crazy' : '', 
				'content_float' : '326', 
				'content_lrec1' : '285', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '279', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '309', 
				'content_masterhead' : '350', 
				'content_super1' : '259', 
				'content_super2' : '', 
				'main_crazy' : '249', 
				'main_float' : '243', 
				'main_lrec1' : '207', 
				'main_lrec1_abc' : '213', 
				'main_lrec2' : '229', 
				'main_lrec2_abc' : '230', 
				'main_lrec2_xyz' : '231', 
				'main_lrec3' : '237', 
				'main_masterhead' : '280', 
				'main_super1' : '293', 
				'main_super2' : '304'
			}
			
		},
		'cn':{
		    'news':{
				'content_crazy' : '', 
				'content_float' : '356', 
				'content_lrec1' : '317', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '287', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '313', 
				'content_masterhead' : '361', 
				'content_super1' : '268', 
				'content_super2' : '', 
				'main_crazy' : '252', 
				'main_float' : '349', 
				'main_lrec1' : '342', 
				'main_lrec1_abc' : '343', 
				'main_lrec2' : '398', 
				'main_lrec2_abc' : '400', 
				'main_lrec2_xyz' : '344', 
				'main_lrec3' : '411', 
				'main_masterhead' : '306', 
				'main_super1' : '319', 
				'main_super2' : '327'
			},
			'commentary':{
				'content_crazy' : '', 
				'content_float' : '310', 
				'content_lrec1' : '263', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '269', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '286', 
				'content_masterhead' : '336', 
				'content_super1' : '255', 
				'content_super2' : '', 
				'main_crazy' : '245', 
				'main_float' : '239', 
				'main_lrec1' : '203', 
				'main_lrec1_abc' : '209', 
				'main_lrec2' : '217', 
				'main_lrec2_abc' : '218', 
				'main_lrec2_xyz' : '219', 
				'main_lrec3' : '828', 
				'main_masterhead' : '274', 
				'main_super1' : '289', 
				'main_super2' : '295'
			}
			
		},
		'tw':{
		    'news':{
				'content_crazy' : '', 
				'content_float' : '325', 
				'content_lrec1' : '273', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '284', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '302', 
				'content_masterhead' : '355', 
				'content_super1' : '261', 
				'content_super2' : '', 
				'main_crazy' : '250', 
				'main_float' : '332', 
				'main_lrec1' : '339', 
				'main_lrec1_abc' : '340', 
				'main_lrec2' : '390', 
				'main_lrec2_abc' : '393', 
				'main_lrec2_xyz' : '341', 
				'main_lrec3' : '407', 
				'main_masterhead' : '305', 
				'main_super1' : '314', 
				'main_super2' : '327'
			},
			'commentary':{
				'content_crazy' : '', 
				'content_float' : '329', 
				'content_lrec1' : '308', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '282', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '311', 
				'content_masterhead' : '357', 
				'content_super1' : '266', 
				'content_super2' : '', 
				'main_crazy' : '251', 
				'main_float' : '335', 
				'main_lrec1' : '351', 
				'main_lrec1_abc' : '352', 
				'main_lrec2' : '394', 
				'main_lrec2_abc' : '395', 
				'main_lrec2_xyz' : '353', 
				'main_lrec3' : '410', 
				'main_masterhead' : '333', 
				'main_super1' : '315', 
				'main_super2' : '331'
			}
		},
		'int':{
		    'news':{
				'content_crazy' : '', 
				'content_float' : '316', 
				'content_lrec1' : '318', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '322', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '324', 
				'content_masterhead' : '376', 
				'content_super1' : '264', 
				'content_super2' : '', 
				'main_crazy' : '254', 
				'main_float' : '354', 
				'main_lrec1' : '345', 
				'main_lrec1_abc' : '347', 
				'main_lrec2' : '403', 
				'main_lrec2_abc' : '405', 
				'main_lrec2_xyz' : '348', 
				'main_lrec3' : '414', 
				'main_masterhead' : '307', 
				'main_super1' : '321', 
				'main_super2' : '330'
			}
		}
	},

	
	'tw':{
	
		'other' : {
		
			'other' : {
				'other_crazy' : '', 
				'other_float' : '3020', 
				'other_lrec1' : '3021', 
				'other_lrec1_abc' : '', 
				'other_lrec2' : '3022', 
				'other_lrec2_abc' : '', 
				'other_lrec2_xyz' : '', 
				'other_lrec3' : '3023', 
				'other_masterhead' : '3018', 
				'other_super1' : '3019', 
				'other_super2' : ''

			}
		},
		
		'hk':{
			'news':{
				'content_crazy' : '', 
				'content_float' : '199', 
				'content_lrec1' : '187', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '191', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '195', 
				'content_masterhead' : '179', 
				'content_super1' : '183', 
				'content_super2' : '', 
				'main_crazy' : '175', 
				'main_float' : '171', 
				'main_lrec1' : '135', 
				'main_lrec1_abc' : '136', 
				'main_lrec2' : '143', 
				'main_lrec2_abc' : '144', 
				'main_lrec2_xyz' : '145', 
				'main_lrec3' : '152', 
				'main_masterhead' : '159', 
				'main_super1' : '163', 
				'main_super2' : '167'
			},
			'commentary':{
				'content_crazy' : '', 
				'content_float' : '200', 
				'content_lrec1' : '188', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '192', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '196', 
				'content_masterhead' : '180', 
				'content_super1' : '184', 
				'content_super2' : '', 
				'main_crazy' : '176', 
				'main_float' : '172', 
				'main_lrec1' : '141', 
				'main_lrec1_abc' : '142', 
				'main_lrec2' : '153', 
				'main_lrec2_abc' : '155', 
				'main_lrec2_xyz' : '156', 
				'main_lrec3' : '154', 
				'main_masterhead' : '160', 
				'main_super1' : '164', 
				'main_super2' : '168'
			}
			
		},
		'cn':{
		     'news':{
				'content_crazy' : '', 
				'content_float' : '201', 
				'content_lrec1' : '189', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '193', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '197', 
				'content_masterhead' : '181', 
				'content_super1' : '185', 
				'content_super2' : '', 
				'main_crazy' : '177', 
				'main_float' : '173', 
				'main_lrec1' : '137', 
				'main_lrec1_abc' : '138', 
				'main_lrec2' : '146', 
				'main_lrec2_abc' : '147', 
				'main_lrec2_xyz' : '148', 
				'main_lrec3' : '157', 
				'main_masterhead' : '161', 
				'main_super1' : '165', 
				'main_super2' : '169'
			},
			'commentary':{
				'content_crazy' : '', 
				'content_float' : '200', 
				'content_lrec1' : '188', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '192', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '196', 
				'content_masterhead' : '180', 
				'content_super1' : '184', 
				'content_super2' : '', 
				'main_crazy' : '176', 
				'main_float' : '172', 
				'main_lrec1' : '141', 
				'main_lrec1_abc' : '142', 
				'main_lrec2' : '153', 
				'main_lrec2_abc' : '155', 
				'main_lrec2_xyz' : '156', 
				'main_lrec3' : '456', 
				'main_masterhead' : '160', 
				'main_super1' : '164', 
				'main_super2' : '168'
			}
		},
		'tw':{
		    'news':{
				'content_crazy' : '', 
				'content_float' : '123', 
				'content_lrec1' : '105', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '111', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '117', 
				'content_masterhead' : '93', 
				'content_super1' : '99', 
				'content_super2' : '', 
				'main_crazy' : '37', 
				'main_float' : '36', 
				'main_lrec1' : '30', 
				'main_lrec1_abc' : '31', 
				'main_lrec2' : '32', 
				'main_lrec2_abc' : '33', 
				'main_lrec2_xyz' : '34', 
				'main_lrec3' : '35', 
				'main_masterhead' : '27', 
				'main_super1' : '28', 
				'main_super2' : '29',
				'main_lrec_notice' : '812'
			},
			 'commentary':{
				'content_crazy' : '', 
				'content_float' : '124', 
				'content_lrec1' : '106', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '112', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '118', 
				'content_masterhead' : '94', 
				'content_super1' : '100', 
				'content_super2' : '', 
				'main_crazy' : '48', 
				'main_float' : '47', 
				'main_lrec1' : '41', 
				'main_lrec1_abc' : '42', 
				'main_lrec2' : '43', 
				'main_lrec2_abc' : '44', 
				'main_lrec2_xyz' : '45', 
				'main_lrec3' : '46', 
				'main_masterhead' : '38', 
				'main_super1' : '39', 
				'main_super2' : '40'
			},
			'finance':{
				'content_crazy' : '', 
				'content_float' : '125', 
				'content_lrec1' : '107', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '113', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '119', 
				'content_masterhead' : '95', 
				'content_super1' : '101', 
				'content_super2' : '', 
				'main_crazy' : '59', 
				'main_float' : '58', 
				'main_lrec1' : '52', 
				'main_lrec1_abc' : '53', 
				'main_lrec2' : '54', 
				'main_lrec2_abc' : '55', 
				'main_lrec2_xyz' : '56', 
				'main_lrec3' : '57', 
				'main_masterhead' : '49', 
				'main_super1' : '50', 
				'main_super2' : '51'
			},
			'entertainment':{
				'content_crazy' : '', 
				'content_float' : '126', 
				'content_lrec1' : '108', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '114', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '120', 
				'content_masterhead' : '96', 
				'content_super1' : '102', 
				'content_super2' : '', 
				'main_crazy' : '70', 
				'main_float' : '69', 
				'main_lrec1' : '63', 
				'main_lrec1_abc' : '64', 
				'main_lrec2' : '65', 
				'main_lrec2_abc' : '66', 
				'main_lrec2_xyz' : '67', 
				'main_lrec3' : '68', 
				'main_masterhead' : '60', 
				'main_super1' : '61', 
				'main_super2' : '62'
			},
			'sport':{
				'content_crazy' : '', 
				'content_float' : '127', 
				'content_lrec1' : '109', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '115', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '121', 
				'content_masterhead' : '97', 
				'content_super1' : '103', 
				'content_super2' : '', 
				'main_crazy' : '81', 
				'main_float' : '80', 
				'main_lrec1' : '74', 
				'main_lrec1_abc' : '75', 
				'main_lrec2' : '76', 
				'main_lrec2_abc' : '77', 
				'main_lrec2_xyz' : '78', 
				'main_lrec3' : '79', 
				'main_masterhead' : '71', 
				'main_super1' : '72', 
				'main_super2' : '73'
			},
			'lifestyle':{
				'content_crazy' : '', 
				'content_float' : '128', 
				'content_lrec1' : '110', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '116', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '122', 
				'content_masterhead' : '98', 
				'content_super1' : '104', 
				'content_super2' : '', 
				'main_crazy' : '92', 
				'main_float' : '91', 
				'main_lrec1' : '85', 
				'main_lrec1_abc' : '86', 
				'main_lrec2' : '87', 
				'main_lrec2_abc' : '88', 
				'main_lrec2_xyz' : '89', 
				'main_lrec3' : '90', 
				'main_masterhead' : '82', 
				'main_super1' : '83', 
				'main_super2' : '84'
			}
		},
		'int':{
		    'news':{
				'content_crazy' : '', 
				'content_float' : '202', 
				'content_lrec1' : '190', 
				'content_lrec1_abc' : '', 
				'content_lrec2' : '194', 
				'content_lrec2_abc' : '', 
				'content_lrec2_xyz' : '', 
				'content_lrec3' : '198', 
				'content_masterhead' : '182', 
				'content_super1' : '186', 
				'content_super2' : '', 
				'main_crazy' : '178', 
				'main_float' : '174', 
				'main_lrec1' : '139', 
				'main_lrec1_abc' : '140', 
				'main_lrec2' : '149', 
				'main_lrec2_abc' : '150', 
				'main_lrec2_xyz' : '151', 
				'main_lrec3' : '158', 
				'main_masterhead' : '162', 
				'main_super1' : '166', 
				'main_super2' : '170'
			}
		}
	}
}

var OA_zones = {

}

var OA_Criteo_source = { // nation_type
	'tw_lrec1' : 'oncctw_rta1_300250', 
	'tw_super1' : 'oncctw_rta1_72890',
	'hk_lrec1' : 'oncchk_rta1_300250', 
	'hk_super1' : 'oncchk_rta1_72890'
}

ONCC.GetBanner = {


		init : function() {
			ONCC.OpenXAdZone['hk']['sc'] = ONCC.OpenXAdZone['hk']['hk'];
			//ONCC.AdZone['cn'] = ONCC.AdZone['hk'];

			ONCC.OpenXAdZone['cn'] = ONCC.OpenXAdZone['hk'];
			
			/*
			ONCC.OpenXAdZone['cn']['hk']['news']['main_focus_a'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['main_focus_b'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['main_focus_c'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['main_focus_c_2'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['main_focus_d'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['main_focus_e'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['main_focus_f'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['control_focus_ab'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['control_focus_cd'] = '';
			ONCC.OpenXAdZone['cn']['hk']['news']['control_focus_ef'] = '';
*/
			if ( typeof ( ONCC.OpenXAdZone[ONCC.getNation()][ONCC.getLocation()][ONCC.getSection()] ) != 'undefined' ) {
				
				$.each ( ONCC.OpenXAdZone[ONCC.getNation()][ONCC.getLocation()][ONCC.getSection()] , function( k , v ) {
			
					if ( (v + "") != "" ) {
						if ( ONCC.getLevel() == 'main' && (k.indexOf('main_') != -1 ||  k.indexOf('control_') != -1 )  ) {
						OA_zones[k] = parseInt(v);
						}
						
						if ( ONCC.getLevel() == 'content' && k.indexOf('content_')  != -1 ) {
							OA_zones[k] = parseInt(v);
						}
					}
					
					if ( ONCC.view == 'm' ) {
				
						if ( ONCC.getLevel() == 'content' && k == 'content_lrec1' ) {
							ONCC.OpenXAdZone[ONCC.getNation()][ONCC.getLocation()][ONCC.getSection()][k] = ONCC.OpenXMobileAdZone[ONCC.getNation()]['content_bottombanner'];
						} else if ( ONCC.getLevel() == 'content' && k == 'content_masterhead' ) {
							ONCC.OpenXAdZone[ONCC.getNation()][ONCC.getLocation()][ONCC.getSection()][k] = ONCC.OpenXMobileAdZone[ONCC.getNation()]['content_transitionpage'];
						} else if ( ONCC.getLevel() == 'main' ) {
							
						} else {
							ONCC.OpenXAdZone[ONCC.getNation()][ONCC.getLocation()][ONCC.getSection()][k] = "";
						}
					}
					
				});
			
			} else {
			
				$.each ( ONCC.OpenXAdZone[ONCC.getNation()]['other']['other'], function( k , v ) {
					OA_zones[k] = parseInt(v);
				});
			}
			
			
	
		},
		
		WriteAdZone: function(type,sect,locate,region) {
	
		
			try{
				var zone = ONCC.AdZone[region][locate][sect][type];
				document.write('<script type="text/javascript" src="http://ad1.on.cc/phpAdsNew/adjs.php?what=zone:'+zone+'"></script>');
			}catch(e){
				try{
					var type = type.replace('main','other').replace('list','other').replace('content','other');
					var zone = ONCC.AdZone[region]['other']['other'][type];
					document.write('<script type="text/javascript" src="http://ad1.on.cc/phpAdsNew/adjs.php?what=zone:'+zone+'"></script>');
				}catch(exception){
				}
				//this._getDefault();
			}

		},
	
		WriteOpenXAdZone: function(type,sect,locate,region) {
		
			try{
				var zone = ONCC.OpenXAdZone[region][locate][sect][type];
				//var criteo_source = OA_Criteo_source[region + "_" + type];
				
				OA_zones[type]=zone;

				if ( $ONCC.cookie('crtg_oncctw_rta') != '' && typeof ( criteo_source ) != 'undefined') {
					 if ( $ONCC.cookie('crtg_oncctw_rta').indexOf( criteo_source ) != -1 ) {
						document.write('<script type="text/javascript" src="http://ad4.on.cc/web/www/delivery/ajs.php?zoneid=' + zone + '&amp;source=' + criteo_source + '"></script>');
						type = '';
					 }
				}
				 
				if ( ONCC.view == 'm' && ONCC.getLevel() == 'content') {
					
					if ( type == 'content_lrec1' ) {
						if ( $('.contentFeature #ads_large1').length == 0 ) {
							$('#ads_large1').appendTo('.contentFeature');
							
							if ( ONCC.platform.iOS ) {
								$('#ads_large1').addClass('ios');
							}
							ONCC.OpenXAdZone[region][locate][sect][type] = '';
							if ( zone != '' ) {
								document.write('<script type="text/javascript" src="http://ad7.on.cc/mobile/www/delivery/ajs.php?zoneid=' + zone + '"></script>');
							}
						}
					} else {
						if ( zone != '' ) {
							document.write('<script type="text/javascript" src="http://ad7.on.cc/mobile/www/delivery/ajs.php?zoneid=' + zone + '"></script>');
						}
					}
					
					
					type = '';
				} 
				
				return type;
			}catch(e){
				try{
					var type = type.replace('main','other').replace('list','other').replace('content','other');
					var zone = ONCC.OpenXAdZone[region]['other']['other'][type];
					OA_zones['other']=zone;
					return type;
					//document.write('<script type="text/javascript" src="http://ad1.on.cc/phpAdsNew/adjs.php?what=zone:'+zone+'"></script>');
				}catch(exception){
				}
				//this._getDefault();
			}
			
		/*
			try{
				var zone = ONCC.OpenXAdZone[region][locate][sect][type];
				var criteo_source = OA_Criteo_source[region + "_" + locate + "_" + sect + "_" + type];
				
				OA_zones[type]=zone;

				if ( $ONCC.cookie('crtg_oncctw_rta') != '' && typeof ( criteo_source ) != 'undefined') {
					 if ( $ONCC.cookie('crtg_oncctw_rta').indexOf( criteo_source ) != -1 ) {
						document.write('<script type="text/javascript" src="http://ad4.on.cc/web/www/delivery/ajs.php?zoneid=' + zone + '&amp;source=' + criteo_source + '"></script>');
						type = '';
					 }
					
				}
				
				return type;
			}catch(e){
				try{
					var type = type.replace('main','other').replace('list','other').replace('content','other');
					var zone = ONCC.OpenXAdZone[region]['other']['other'][type];
					OA_zones['other']=zone;
					return 'other';
					//document.write('<script type="text/javascript" src="http://ad1.on.cc/phpAdsNew/adjs.php?what=zone:'+zone+'"></script>');
				}catch(exception){
				}
				//this._getDefault();
			}*/
		
		
		},
	
		HideEmtpyBanner : function( container ) {
			$('#' + container).hide();
		},
		_getDefault:function(type){
			if(type == 'undefined'){return false;}
			try{
				if(type == 'masterhead'){
					GetBanner.init(1000);
				}else if(type == 'lrec1'){
					GetBanner.init(300);
				}else if(type == 'lrec2'){
					GetBanner.init('300_2');
				}else if(type == 'superbanner'){
					GetBanner.init(728);
				}
			}catch(e){
				return false;
			}
			return false;
		}
}

ONCC.GetBanner.init();

ONCC.mOverLay = {
	
	build:function(){
		
		$('body').prepend('<div id="mOverLay-container" style="position: fixed;  top: 0px;  left: 0px; width: 100%;  height: 100%;  z-index: 2147483647;"></div>');

		var html = '';
		html += '<div style="height: 100%;">';
		html += '<div id="apps-ad">';
		html += '<div id="banner-ad">';
		html += '<div id="banner-close"></div>';
		html += '<div id="banner-wrapper" style="width: 640px; height: 100%; position: absolute;">';
		html += '<table width="100%" height="100%"><tr valign="center"><td align="center">';
		html += '<img src="/ad/game2015/300x250_popup.gif" width="600px" />';
		html += '</td></tr></table>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		
		$('#mOverLay-container').html( html );
		$('#banner-close').click ( function() {
			$('#mOverLay-container').remove();
		});
	}

}

//ONCC.mOverLay.build() ; 
//ONCC.mOverLay.set('<iframe scrolling="no" height="23px" frameborder="0" width="280px" src="http://home.on.cc/adv/web/corp/js/searchbox_yahoo.html?gfghf=gfghdf&amp;tsn_search"></iframe>') ;

ONCC.hframe = {
	contentWidth : 1044,
	topW : 1264,
	topH : 150,
	leftW : 100,
	leftH : 800,
	rightW : 100,
	rightH : 800,
	topSrc : false,
	topSwf : false,
	leftSrc : false,
	leftSwf : false,
	rightSrc : false,
	rightSwf : false,
	bodyBg : '',
	flashVars : {},
	pageMargin:10,
	mode:1,
	setMode:function(mode){
		if(typeof mode == 'undefined'){this.mode = 1;}else{this.mode = mode;}
	},
	setUrl:function(s){
		this.flashVars = {'clickTAG':s, 'clickTag':s};
	},
	setTop:function(src,isSwf,width,height){
		if(typeof width != 'undefined'){this.topW = width;}
		if(typeof height != 'undefined'){this.topH = height;}
		if(typeof isSwf == 'undefined'){isSwf = false;}
		this.topSrc = src;
		this.topSwf = isSwf;
	},
	setLeft:function(src,isSwf,width,height){
		if(typeof width != 'undefined'){this.leftW = width;}
		if(typeof height != 'undefined'){this.leftH = height;}
		if(typeof isSwf == 'undefined'){isSwf = false;}
		this.leftSrc = src;
		this.leftSwf = isSwf;
	},
	setRight:function(src,isSwf,width,height){
		if(typeof width != 'undefined'){this.rightW = width;}
		if(typeof height != 'undefined'){this.rightH = height;}
		if(typeof isSwf == 'undefined'){isSwf = false;}
		this.rightSrc = src;
		this.rightSwf = isSwf;
	},
	setBackground:function(img,color,repeat){
		if(typeof img != 'undefined' && img != '' && img != false){
			this.bodyBg += 'background-image:url('+img+');';
			this.bodyBg += 'background-position:top center;';
			if(typeof repeat != 'undefined' && repeat != '' && repeat != false){
				this.bodyBg += 'background-repeat:'+repeat+';';
			}else{
				this.bodyBg += 'background-repeat:no-repeat;';
			}
		}
		if(typeof color != 'undefined' && repeat != '' && repeat != false){
			this.bodyBg += 'background-color:'+color+';';
		}
	},
	build:function(){
		$('body').prepend('<div id="hframe-container" style="position:relative;width:'+this.contentWidth+'px;margin:auto;"></div>');
		if(this.topSrc){
			if(this.mode == 1){
				$('#hframe-container').append('<div style="overflow:hidden;width:'+this.topW+'px;height:'+this.topH+'px;margin-left:-'+(this.pageMargin+this.leftW)+'px;" ><div class="hframe-top-container" style="position:absolute" ><div id="hframe-top" ></div></div></div>');
			}else if(this.mode == 2){
				$('#hframe-container').append('<div style="overflow:hidden;width:'+this.topW+'px;height:'+this.topH+'px;margin-left:-'+(this.pageMargin)+'px;" ><div class="hframe-top-container" style="position:absolute" ><div id="hframe-top" ></div></div></div>');
			}
			if(this.topSwf){
				swfobject.embedSWF(this.topSrc, "hframe-top", this.topW , this.topH , "9.0.0","expressInstall.swf",this.flashVars);		
			}else{
				$('#hframe-top').html(this.topSrc);
			}
		}
		if(this.leftSrc){
			if(this.mode == 1){
				$('#hframe-container').append('<div style="position:absolute;overflow:hidden;width:'+this.leftW+'px;height:'+this.rightH+'px;left:-'+(this.pageMargin+this.leftW)+'px;" ><div class="hframe-left-container" style="position:absolute" ><div id="hframe-left" ></div></div></div>');
			}else if(this.mode == 2){
				$('#hframe-container').append('<div style="position:absolute;overflow:hidden;width:'+this.leftW+'px;height:'+this.rightH+'px;top:0px;left:-'+(this.pageMargin+this.leftW)+'px;" ><div class="hframe-left-container" style="position:absolute" ><div style="position:absolute" id="hframe-left" ></div></div></div>');
			}
			if(this.leftSwf){
				swfobject.embedSWF(this.leftSrc, "hframe-left",this.leftW, this.leftH, "9.0.0","expressInstall.swf",this.flashVars);		
			}else{
				$('#hframe-left').html(this.leftSrc);
			}
		}
		if(this.rightSrc){
			if(this.mode == 1){
				$('#hframe-container').append('<div style="position:absolute;overflow:hidden;width:'+this.leftW+'px;height:'+this.leftH+'px;right:-'+(this.pageMargin+this.rightW)+'px;" ><div class="hframe-right-container" style="position:absolute" ><div style="position:absolute" id="hframe-right" ></div></div></div>');
			}else if(this.mode == 2){
				$('#hframe-container').append('<div style="position:absolute;overflow:hidden;width:'+this.leftW+'px;height:'+this.leftH+'px;top:0px;right:-'+(this.pageMargin+this.rightW)+'px;" ><div class="hframe-right-container" style="position:absolute" ><div style="position:absolute" id="hframe-right" ></div></div></div>');
			}
			if(this.rightSwf){
				swfobject.embedSWF(this.rightSrc, "hframe-right", this.rightW, this.rightH, "9.0.0","expressInstall.swf",this.flashVars);
			}else{
				$('#hframe-right').html(this.rightSrc);
			}
		}
		if(this.bodyBg != ''){
			$('body').attr('style',this.bodyBg);
		}
	},
	fixPosition:function(fix){
		this.fixPos(fix);
		var _this = this;
		$(window).scroll(function(){
			_this.fixPos(fix);
		});
	},
	fixPos:function(fix){
		if(this.mode == 1){
			var countTop = this.topH;
		}else{
			var countTop = 0;
		}
		var leftH = this.leftH;
		
		if($(window).scrollTop() > countTop){
			$('#hframe-container .hframe-left-container').css('position','fixed');
			$('#hframe-container .hframe-right-container').css('position','fixed');
			if(fix == 'top'){
				$('#hframe-container .hframe-left-container').css('top',0);
				$('#hframe-container .hframe-right-container').css('top',0);
			}else if(fix == 'bottom'){
				$('#hframe-container .hframe-left-container').css('bottom',0);
				$('#hframe-container .hframe-right-container').css('bottom',0);
			}else{
				if(leftH > $(window).height()){
					$('#hframe-container .hframe-left-container').css('bottom',0);
					$('#hframe-container .hframe-right-container').css('bottom',0);
				}else{
					$('#hframe-container .hframe-left-container').css('top',0);
					$('#hframe-container .hframe-right-container').css('top',0);
				}
			}
		}else{
			$('#hframe-container .hframe-left-container').css('position','absolute');
			$('#hframe-container .hframe-right-container').css('position','absolute');
		}
	}
}
$(document).ready(function() {
	
	if ( $('#ads_large3').length > 0 ) {
		$('#ads_large3').html('<iframe id="ads_large3Iframe" src="http://hk.on.cc/ad/lrec/lrec3.html?adzone='  + ONCC.OpenXAdZone[ONCC.getNation()][ONCC.getLocation()][ONCC.getSection()][ ONCC.getLevel() + '_lrec3'] + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:300px; height:250px;" allowtransparency="true"></iframe>');
		$('#ads_large3').show();
	}
});

