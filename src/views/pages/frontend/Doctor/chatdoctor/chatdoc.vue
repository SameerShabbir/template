<template>
<div class="chat-page">
    <div class="main-wrapper">

        <layout-doctorheader></layout-doctorheader>

		 <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-12">
							<div class="chat-window">

							<div class="chat-cont-left">
								<chatdocleft></chatdocleft>
                            </div>

								<div class="chat-cont-right">
								
								<chatdocright></chatdocright>

                                </div>
								
							</div>

						</div>

					</div>

					<!-- /Row -->

				</div>

			</div>		
			<!-- /Page Content -->
		
        <layout-footer></layout-footer>
        
    </div>

    </div>

</template>

<script>
export default {
	mounted() {

	},
    data() {
        return {

        }
    }
}
</script>