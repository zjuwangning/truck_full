<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input type="text" focus clearable v-model="username" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-row">
				<text class="title">邮箱：</text>
				<m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {getRootUrl} from '../../config/serverConfig.js'
	import {URL} from '../../config/url.js'
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				username: '',
				password: '',
				email: ''
			}
		},
		methods: {
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.username.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					username: this.username,
					password: this.password
				}
				uni.request({
					url: getRootUrl()+URL.USER_REGIST,
					data,
					method:'POST',
					success: res => {
						console.log('返回', res.data);
						if (res.data.code === 0) {
							uni.showToast({
								title: res.data['msg'],
								duration: 2500,
								complete: () => {
									console.log('complete111')
								}
							});
							setTimeout(
								() => {
									uni.redirectTo({
										url: '../login/login',
									})
								}, 2499
							)
						}
						else {
							uni.showToast({
								icon: 'none',
								title: res.data['msg'],
								duration: 2500
							});
						}
					}
				})
			}
		}
	}
</script>

<style>

</style>
