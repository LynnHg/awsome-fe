# 基础
- `pwd`：显示当前所在的工作目录
```shell
➜  awsome-fe git:(main) ✗ pwd
/Users/lynnhg/Desktop/repo/lynn_front/awsome-fe
```
- `ls`：列出当前目录中的文件和文件夹
  - -a，--all：显示所有文件，包括隐藏文件。
  - -l，--long：以长格式显示文件信息，包括文件权限、所有者、大小等。
  - -h，--human-readable：以人类可读的格式显示文件大小（例如1K 234M 2G）。
  - -r，--reverse：以相反的顺序排列文件。
  - -t，--sort=time：按时间排序文件。
- `cd`：切换当前工作目录
  - `cd -`：快速回到之前的位置
- `mkdir`：创建新的目录
  - -m, --mode=MODE：指定新建目录的权限。
  - -p, --parents：如果父目录不存在，则自动创建它。
  - -v, --verbose：在创建目录时显示详细信息。
  - -Z：在创建目录时设置安全模式。
- `touch`：创建新的空文件
- `rm`：删除文件或目录
- `mv`：移动或重命名文件或目录
- `cp`：复制文件或目录
- `man`：显示指定命令的手册页
- `echo`：输出指定的字符串
- `cat`：显示文件的内容
  - -n 或 --number：由 1 开始对所有输出的行数编号。
  - -b 或 --number-nonblank：和 -n 相似，只不过对于空白行不编号。
  - -s 或 --squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行。
- `grep`：在文件中搜索匹配的文本行
- `chmod`：控制用户对文件的权限的命令
  - chmod -cfvR 777 file

# 文件

## 文件类型
- 普通文件：以 - 开头。
- 目录文件：以 d 开头。
- 字符设备文件：以 c 开头。
- 块设备文件：以 b 开头。
- 软链接文件：以 l 开头。
- 套接字文件：以 s 开头。

```
➜  awsome-fe git:(main) ✗ ls -la
total 16
drwxr-xr-x   6 lynnhg  staff   192 12 14 15:09 .
drwxr-xr-x@ 25 lynnhg  staff   800 12 14 15:09 ..
drwxr-xr-x  15 lynnhg  staff   480 12 14 15:16 .git
-rw-r--r--   1 lynnhg  staff  1061 12 14 15:09 LICENSE
-rw-r--r--   1 lynnhg  staff  3938 12 14 15:20 README.md
drwxr-xr-x   4 lynnhg  staff   128 12 14 15:10 mds
```
## 文件权限

文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。
![1](https://www.runoob.com/wp-content/uploads/2014/08/file-permissions-rwx.jpg)

![2](https://www.runoob.com/wp-content/uploads/2014/08/rwx-standard-unix-permission-bits.png)

# 其他
[更多命令](https://www.runoob.com/linux/linux-command-manual.html)