<!DOCTYPE html>
<html>

	<head>

		<!--_____ META ALGUS _______-->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--_____META LÕPP_______-->
		<title>TTÜ | Dashboard</title>
		<!--_____ PLUGINATE CSS _______-->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="font-awesome/css/font-awesome.css" rel="stylesheet">
		<link href="css/plugins/iCheck/cherry.css" rel="stylesheet">
		<link href="css/animate.css" rel="stylesheet">
		<link href="css/plugins/selectize/selectize.css" rel="stylesheet">
		<link href="css/plugins/awesomplete/awesomplete.css" rel="stylesheet">
		<!--_____ LEHTEDE CSS _______-->
		<link href="css/style.css" rel="stylesheet">

	</head>

	<body class="top-navigation">

		<div id="wrapper">
			<div id="page-wrapper" class="gray-bg">
				<!--_________ NAVBAR ALGUS ___________-->
				<div class="row">
					<nav class="navbar navbar-static-top white-bg" role="navigation">
						<div class="navbar-header">
							<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
								<i class="fa fa-reorder"></i>
							</button>
							<a href="#" class="navbar-brand">TTÜ</a>
						</div>
						<div class="navbar-collapse collapse" id="navbar">
							<ul class="nav navbar-nav">
								<form role="search" class="navbar-form-custom m-l-md" action="search_results.html">
									<div class="form-group">
										<input type="text" placeholder="Otsi siseveebist..." class="form-control" name="top-search" id="top-search">
									</div>
								</form>
								<li class="dropdown">
									<a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Dokumendid <span class="caret"></span></a>
									<ul role="menu" class="dropdown-menu">
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
									</ul>
								</li>
								<li class="dropdown">
									<a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Töökorraldus <span class="caret"></span></a>
									<ul role="menu" class="dropdown-menu">
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
									</ul>
								</li>
								<li class="dropdown">
									<a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Koolitused <span class="caret"></span></a>
									<ul role="menu" class="dropdown-menu">
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
									</ul>
								</li>
								<li class="dropdown">
									<a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Teenused <span class="caret"></span></a>
									<ul role="menu" class="dropdown-menu">
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
									</ul>
								</li>
								<li class="dropdown">
									<a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Foorum <span class="caret"></span></a>
									<ul role="menu" class="dropdown-menu">
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
										<li><a href="">Menu item</a></li>
									</ul>
								</li>

							</ul>
							<ul class="nav navbar-top-links navbar-right">
								<li>
									<a href="login.html">
										<i class="fa fa-sign-out"></i> Log out
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<!--________ NAVBAR LÕPP ____________-->
				<!--________ SISU ALGUS _____________-->
				<div class="wrapper wrapper-content animated fadeInRight">
					<div class="row">
						<div class="col-lg-4">
							<div class="ibox float-e-margins">
								<div class="ibox-title">
									<h5>Rapid modelleerimine</h5>
									<div class="ibox-tools">
										<a class="collapse-link">
											<i class="fa fa-chevron-up"></i>
										</a>
										<a class="dropdown-toggle" data-toggle="dropdown" href="#">
											<i class="fa fa-wrench"></i>
										</a>
										<ul class="dropdown-menu dropdown-user">
											<li><a href="#">Config option 1</a>
											</li>
											<li><a href="#">Config option 2</a>
											</li>
										</ul>
										<a class="close-link">
											<i class="fa fa-times"></i>
										</a>
									</div>
								</div>
								<div class="ibox-content">
									<div class="">
										<a onclick="fnClickAddRow();" href="javascript:void(0);" class="btn btn-primary ">Lisa uus isik</a>
									</div>
									<table class="table table-striped table-bordered table-hover table-rapid" id="editable">
										<thead>
											<tr>
												<th>Nimi</th>
												<th>R</th>
												<th>A</th>
												<th>P</th>
												<th>I</th>
												<th>D</th>
											</tr>
										</thead>
										<tbody>
											<tr class="gradeX">
												<td width="60%">
													<input id="myinput" />
												</td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
											</tr>
											<tr class="gradeX">
												<td width="60%"><p class="edit">Peeter</p></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
											</tr>
											<tr class="gradeX">
												<td width="60%">Salme</td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
											</tr>
											<tr class="gradeX">
												<td width="60%">Linda</td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
											</tr>
											<tr class="gradeX">
												<td width="60%">Artur</td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
												<td width="8%"><input type="checkbox"></td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th>Nimi</th>
												<th>R</th>
												<th>A</th>
												<th>P</th>
												<th>I</th>
												<th>D</th>
											</tr>
										</tfoot>
									</table>

								</div>
							</div>
						</div>
						<!--________ TEST ____________-->
						<div class="col-lg-4">
							<div class="edit" id="div_1">Dolor</div>
							<div class="edit_area" id="div_2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
							</div>
							<input type="checkbox">
							<input type="checkbox" checked>
							<input type="radio" name="iCheck">
							<input type="radio" name="iCheck" checked>
						</div>
						<!--_______ TESTI LÕPP _______-->
					</div>
				</div>
				<!--________ SISU LÕPP ______________-->
				<!--________ FOOTERI ALGUS ___________-->
				<div class="footer">
					<div class="pull-right">
						Sul on vaba ruumi <strong>567MB</strong>
					</div>
					<div>
						<strong>Copyright</strong> TTÜ &copy; 2014-2015
					</div>
				</div>
				<!--________FOOTERI LÕPP____________-->
			</div>
		</div>
		<!-- Mainly scripts -->
		<script src="js/jquery-2.1.1.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/plugins/metisMenu/jquery.metisMenu.js"></script>
		<script src="js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
		<script src="js/plugins/jeditable/jquery.jeditable.js"></script>

		<!-- Data Tables -->
		<script src="js/plugins/dataTables/jquery.dataTables.js"></script>
		<script src="js/plugins/dataTables/dataTables.bootstrap.js"></script>
		<script src="js/plugins/dataTables/dataTables.responsive.js"></script>
		<script src="js/plugins/dataTables/dataTables.tableTools.min.js"></script>

		<!-- Custom and plugin javascript -->
		<script src="js/inspinia.js"></script>
		<script src="js/plugins/pace/pace.min.js"></script>
		<script src="js/plugins/iCheck/icheck.min.js"></script>
		<script src="js/plugins/awesomplete/awesomplete.js"></script>

		<!-- Page-Level Scripts -->
		<script>
			$(document).ready(function() {
				//________ CHECKBOXES AND RADIO BUTTONS BEGIN ____________//
				$('input').iCheck({
					checkboxClass: 'icheckbox_square-cherry',
					radioClass: 'iradio_square-cherry',
					increaseArea: '20%' // optional
				});
				//________ CHECKBOXES AND RADIO BUTTONS END ________//

				//________ JEDITABLE BEGIN ________//
				$('.edit').editable('php/save.php', {
					data   : '<?php print  json_encode($array); ?>',
					type   : 'select',
					submit : 'OK'
				});
				//________ JEDITABLE END ________//

				//________ AWESOMPLETE TYPEHEAD BEGIN _____//
				var input = document.getElementById("myinput");
				new Awesomplete(input, {
					list: ["Peeter", "Linda", "Salme", "Artur", "Johann", "johanna", "Joonatan", "Silver", "Maimu"]
				});
				//________ AWESOMPLETE TYPEHEAD END _____//


			});

			function fnClickAddRow() {
				$('#editable').dataTable().fnAddData( [
					"Isik",
					"<input type='checkbox'>",
					"<input type='checkbox'>",
					"<input type='checkbox'>",
					"<input type='checkbox'>",
					"<input type='checkbox'>" ] );

			}
		</script>


	</body>

</html>
